import React, { useState } from "react";
import styles from "./../styles/ProposalItem.module.css";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useContractEvent,
} from "wagmi";
import { parseToEther, shg_abi } from "../util";
import Timer from "./Timer";
import { addToast } from "../state_management/slices/toast";
import { useDispatch } from "react-redux";
import DepositerInfo from "./DepositorInfo";
import { ethers } from "ethers";

let initialState = {
  amount: 0,
  proposer: "0x0000",
  proposalId: 1,
  purpose: "",
  monthlyInterestRate: 1,
  currentStatus: 0,
  loanDurationInMonth: 0,
  proposalTime: 0,
};

const ProposalItem = ({ address, proposalId, onlyUser, onProposalExpired }) => {
  const [proposalInfo, setProposalInfo] = useState(initialState);
  const [voterDetails, setVoter] = useState([]);
  const [remainingSecond, setRemainingSecond] = useState();
  const statusVal = ["Open", "Claimed", "Cancelled", "Expired"];
  const [approvalAmount, setApprovalAmount] = useState(0);
  const dispatch = useDispatch();

  const statusIdx = {
    Open: 0,
    Claimed: 1,
    Cancelled: 2,
    Expired: 3,
  };

  const accountInfo = useAccount();

  useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "borrowProposal",
    args: [proposalId],
    onSettled(data, error) {
      if (data) {
        let index = 0;
        let temp = {};
        for (let key in initialState) {
          temp[key] = data[index];
          index++;
        }
        setRemainingSecond(parseInt(data[7]) - Math.floor(Date.now() / 1000));
        setProposalInfo(temp);
      }
    },
  });

  useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "getApprovers",
    args: [proposalId],
    onSettled(data, error) {
      console.log("getApprovers", data);
      setVoter(data);
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "proposalCancelled",
    listener(log) {
      if (log.length > 0) {
        const pid = parseInt(log[0].data);
        if (pid === proposalId) {
          setProposalInfo((prev) => ({ ...prev, currentStatus: 2 }));
        }
      }
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "ApprovalUpdated",
    listener(log) {
      if (log.length > 0) {
        const pid = parseInt(log[0].args.proposalId);
        if (pid == proposalId) {
          setVoter((prev) => {
            let newState = [...prev];
            for (let i = 0; i < prev.length; i++) {
              if (newState[i].member == log[0].args.member) {
                newState[i].amount = parseInt(log[0].args.amount);
                return newState;
              }
            }
            newState.push({
              member: log[0].args.member,
              amount: parseInt(log[0].args.amount),
            });
            return newState;
          });
        }
      }
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "ProposalClaimed",
    listener(log) {
      if (log.length > 0) {
        const pid = parseInt(log[0].args.proposalId);
        if (pid == proposalId) {
          setProposalInfo((prev) => ({ ...prev, currentStatus: 1 }));
        }
      }
    },
  });

  const memberInfo = useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "getAllMembers",
  });

  const claimReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "claimApprovedAmount",
    args: [proposalId],
    onSuccess(data) {
      dispatch(addToast({ title: "Withdraw Request", body: data.hash }));
    },
    onError(error) {
      dispatch(addToast({ title: "Error in Withdraw", body: error?.details }));
    },
  });

  const approveReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "approveLimit",
    args: [
      proposalId,
      approvalAmount ? ethers.parseEther(approvalAmount.toString()) : "0",
    ],
    onSuccess(data) {
      dispatch(addToast({ title: "Approval equest", body: data.hash }));
    },
    onError(error) {
      dispatch(addToast({ title: "Error in Withdraw", body: error?.details }));
    },
  });

  const cancelReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "cancelProposal",
    args: [proposalId],
    onSuccess(data) {
      dispatch(addToast({ title: "Cancel Request", body: data.hash }));
    },
    onError(error) {
      dispatch(addToast({ title: "Error in Withdraw", body: error?.details }));
    },
  });

  const isOwner = proposalInfo.proposer == accountInfo?.address;

  const notVotedYet = () => {
    return (
      !isOwner &&
      proposalInfo.currentStatus == statusIdx.Open &&
      !(
        voterDetails.support.includes(accountInfo?.address) ||
        voterDetails.against.includes(accountInfo?.address)
      )
    );
  };

  const canOwnerClaim = () => {
    console.log(
      BigInt(getTotalApprovedLimit()) == BigInt(proposalInfo.amount),
      BigInt(getTotalApprovedLimit()),
      BigInt(proposalInfo.amount)
    );
    return (
      BigInt(getTotalApprovedLimit()) == BigInt(proposalInfo.amount) &&
      isOwner &&
      proposalInfo.currentStatus == statusIdx.Open
    );
  };

  const canOwnerCancel = () => {
    return isOwner && proposalInfo.currentStatus == statusIdx.Open;
  };

  const getStatusText = () => {
    console.log(
      "inside this data is",
      proposalInfo.currentStatus == 0,
      remainingSecond
    );
    if (
      proposalInfo.currentStatus == 0 &&
      remainingSecond <= 0 &&
      BigInt(proposalInfo.amount) != BigInt(getTotalApprovedLimit())
    ) {
      if (onProposalExpired) {
        onProposalExpired(proposalId);
      }
      return statusVal[statusIdx.Expired];
    } else return statusVal[proposalInfo.currentStatus];
  };

  const showTimer = () => {
    return proposalInfo.currentStatus == statusIdx.Open && remainingSecond > 0;
  };

  if (onlyUser && !isOwner) {
    return null;
  }
  const handleSliderChange = (event) => {
    setApprovalAmount(event.target.value);
  };

  const getTotalApprovedLimit = () => {
    let amount = 0;
    for (let i = 0; i < voterDetails.length; i++) {
      amount += parseInt(voterDetails[i].amount);
    }
    return amount;
  };

  const approvedAmountByUser = () => {
    for (let i = 0; i < voterDetails.length; i++) {
      if (voterDetails[i].member == accountInfo.address)
        return voterDetails[i].amount;
    }
    return 0;
  };

  const getApprovalLimit = () => {
    // TODO check if user have that much amount to approved
    let max = BigInt(proposalInfo.amount) - BigInt(getTotalApprovedLimit());
    if (max == 0) {
      return { min: 0, max: 0 };
    }
    return { min: 0, max: max };
  };

  const disabledApproveButton = () => {
    if (approvedAmountByUser() > 0) return false;
    if (approvalAmount === 0) return true;
  };

  const showInputBox = () => {
    return !isOwner && proposalInfo.currentStatus == statusIdx.Open;
  };

  const handleApprovalInputChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      return setApprovalAmount("");
    }
    // Use regular expression to check for valid positive float numbers with 6 decimal points
    const validNumberRegex = /^\d+(\.\d{1,6})?$/;

    if (value === "" || validNumberRegex.test(value)) {
      const intValue = parseFloat(value);
      const min = parseToEther(getApprovalLimit().min);
      const max = parseToEther(getApprovalLimit().max);

      if (!isNaN(intValue) && intValue >= min && intValue <= max) {
        setApprovalAmount(value);
      }
    }
  };

  return (
    <div className={styles.proposalItemContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
          marginTop: "0px",
        }}
      >
        <h4>Id: {parseInt(proposalInfo.proposalId)}</h4>
        <h4>Proposar: {proposalInfo.proposer.substring(-1, 6)}</h4>
        <h4>Amount(SEP): {parseToEther(proposalInfo.amount)}</h4>
        <h4>
          Interest rate/Year(SEP): {parseInt(proposalInfo.monthlyInterestRate)}
        </h4>
        {showTimer() && (
          <h4
            style={{
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px",
              verticalAlign: "top",
            }}
          >
            Voting closes in:{" "}
            <Timer seconds={remainingSecond} timesUpCb={setRemainingSecond} />
          </h4>
        )}
        <h4>Duration: {parseInt(proposalInfo.loanDurationInMonth)} Month</h4>
        <h4>{getStatusText()}</h4>
        <h4>Approved Limit: {parseToEther(getTotalApprovedLimit())} SEP</h4>
      </div>
      {
        <div className={styles.purposeContainer}>
          <p>{proposalInfo.purpose}</p>
          <div className={styles.approveButtonContainer}>
            {showInputBox() && (
              <div className={styles.sliderContainer}>
                Max Allowed Value: {getApprovalLimit().max} SEP{" "}
                <input
                  type="number"
                  id="approvalInput"
                  value={approvalAmount}
                  onChange={handleApprovalInputChange}
                  placeholder="Enter Amount in SEP"
                  className={styles.inputApproval}
                />
                <button
                  onClick={() => {
                    setApprovalAmount(0);
                    approveReq.write();
                  }}
                  disabled={disabledApproveButton()}
                >
                  Approve ({approvalAmount} SEP)
                </button>
                <label>
                  {`You are approving  (${approvalAmount} SEP) with interest rate of  ${parseInt(
                    proposalInfo.monthlyInterestRate
                  )}%/Year`}
                </label>
              </div>
            )}
            {canOwnerCancel() && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={cancelReq.write}
                disabled={cancelReq.isLoading}
              >
                Cancel
              </button>
            )}
            {canOwnerClaim() && (
              <button onClick={claimReq.write} disabled={cancelReq.isLoading}>
                Claim
              </button>
            )}
          </div>
          {voterDetails.length > 0 && (
            <DepositerInfo depositorInfo={voterDetails} />
          )}
        </div>
      }
    </div>
  );
};

export default ProposalItem;
