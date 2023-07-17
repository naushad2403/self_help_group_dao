import React, { useState } from "react";
import styles from "./../styles/ProposalItem.module.css";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useContractEvent,
} from "wagmi";
import { shg_abi } from "../util";
import Timer from "./Timer";
import { addToast } from "../state_management/slices/toast";
import { useDispatch } from "react-redux";
import DepositerInfo from "./DepositorInfo";

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

const ProposalItem = ({ address, proposalId, onlyUser }) => {
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
        setProposalInfo(temp);
        setRemainingSecond(parseInt(data[7]) - Math.floor(Date.now() / 1000));
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
      setProposalInfo((prev) => ({ ...prev, currentStatus: 1 }));
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
    args: [proposalId, approvalAmount],
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
    return (
      getTotalApprovedLimit() == parseInt(proposalInfo.amount) &&
      isOwner &&
      proposalInfo.currentStatus == statusIdx.Open
    );
  };

  const canOwnerCancel = () => {
    return isOwner && proposalInfo.currentStatus == statusIdx.Open;
  };

  const getStatusText = () => {
    if (proposalInfo.currentStatus == 0 && remainingSecond < 0) {
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
    setApprovalAmount(parseInt(event.target.value));
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
    let max = parseInt(proposalInfo.amount) - getTotalApprovedLimit();
    let min = Math.min(5, max);
    return { min, max };
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
        <h4>Proposal id: {parseInt(proposalInfo.proposalId)}</h4>
        <h4>Amount(wei): {parseInt(proposalInfo.amount)}</h4>
        <h4>
          Interest rate/Year(wei): {parseInt(proposalInfo.monthlyInterestRate)}
        </h4>
        {showTimer() && (
          <h4
            style={{
              // marginLeft: "40px",
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px",
              verticalAlign: "top",
            }}
          >
            Voting closes in:{" "}
            <Timer
              seconds={remainingSecond}
              timesUpCb={setRemainingSecond}
            ></Timer>
          </h4>
        )}
        <h4>Duration: {parseInt(proposalInfo.loanDurationInMonth)} Month</h4>
        <h4>{getStatusText()}</h4>
        <h4>Approved Limit: {getTotalApprovedLimit()} Wei</h4>
      </div>
      {
        <div className={styles.purposeContainer}>
          <p>{proposalInfo.purpose}</p>
          <div className={styles.approveButtonContainer}>
            {!isOwner && (
              <div className={styles.sliderContainer}>
                <input
                  type="range"
                  id="approvalSlider"
                  min={getApprovalLimit().min}
                  max={getApprovalLimit().max}
                  value={approvalAmount}
                  onChange={handleSliderChange}
                  style={{ marginRight: "10px", width: "20%", height: "20px" }}
                />

                <button
                  onClick={approveReq.write}
                  disabled={approvalAmount === 0}
                >
                  Approve ({approvalAmount} Wei)
                </button>
                <label>
                  {`You are approving  (${approvalAmount} Wei) with interest rate of  ${parseInt(
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

          {!isOwner && approvedAmountByUser() > 0 && (
            <DepositerInfo memberInfo={voterDetails} />
          )}
        </div>
      }
    </div>
  );
};

export default ProposalItem;
