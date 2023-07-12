import React, { useState } from "react";
import styles from "./../styles/ProposalItem.module.css";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useContractEvent,
} from "wagmi";
import { Router, useRouter } from "next/router";
import { shg_abi } from "../util";
import Timer from "./Timer";

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

let initialVoterState = {
  support: [],
  against: [],
};

const ProposalItem = ({ address, proposalId, onlyUser }) => {
  const [proposalInfo, setProposalInfo] = useState(initialState);
  const [voterDetails, setVoter] = useState(initialVoterState);
  const [message, setMessage] = useState("");
  const [remainingSecond, setRemainingSecond] = useState();
  const [txHash, setTxHash] = useState("");
  const statusVal = ["Open", "Claimed", "Cancelled", "Expired"];

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
    functionName: "getApproversAndRejecters",
    args: [proposalId],
    onSettled(data, error) {
      setVoter({ support: data[0], against: data[1] });
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
    eventName: "ProposalApproved",
    listener(log) {
      if (log.length > 0) {
        const pid = parseInt(log[0].args.proposalId);
        if (pid == proposalId) {
          setVoter((prev) => {
            let newState = { support: [], against: [] };
            prev.support.push(log[0].args.approvar);
            newState.support = [...new Set(prev.support)];
            newState.against = prev.against;
            return newState;
          });
        }
      }
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "ProposalRejected",
    listener(log) {
      if (log.length > 0) {
        const pid = parseInt(log[0].args.proposalId);
        if (pid == proposalId) {
          setVoter((prev) => {
            let newState = { support: [], against: [] };
            prev.against.push(log[0].args.rejector);
            newState.against = [...new Set(prev.against)];
            newState.support = prev.support;
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
      //  console.log("NewGroupCreated", log);
      setProposalInfo((prev) => ({ ...prev, currentStatus: 1 }));
    },
  });

  //       //  event ProposalCancelled(uint _proposalId);
  // event ProposalApproved(uint _proposalId, address approvar);
  // event ProposalRejected(uint _proposalId, address approvar);
  // event ProposalClaimed(uint _proposalId);

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
      setMessage(
        `Withdraw Transaction sent, Amount will be credit sooner Tx Hash:`
      );
      setTxHash(data.hash);
    },
  });

  const approveReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "approveBorrowProposal",
    args: [proposalId],
    onSuccess(data) {
      setMessage(`Approval sent, Tx Hash:`);
      setTxHash(data.hash);
    },
  });

  const rejectReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "rejectBorrowProposal",
    args: [proposalId],
    onSuccess(data) {
      setMessage(`Reject request sent, Tx Hash:`);
      setTxHash(data.hash);
    },
  });

  const cancelReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "cancelProposal",
    args: [proposalId],
    onSuccess(data) {
      setMessage(`Cancel request sent,  Tx Hash:`);
      setTxHash(data.hash);
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
      voterDetails.support.length / memberInfo?.data.length > 0.5 &&
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
          Interest rate/Month(wei): {parseInt(proposalInfo.monthlyInterestRate)}
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
        <h4>
          Voter(Support/Against):{" "}
          <span style={{ color: "green" }}>{voterDetails.support.length} </span>
          / <span style={{ color: "red" }}>{voterDetails.against.length}</span>
        </h4>
      </div>
      {
        <div className={styles.purposeContainer}>
          {/* <h2>Purpose</h2> */}
          <p>{proposalInfo.purpose}</p>
          <div className={styles.approveButtonContainer}>
            {notVotedYet() && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={rejectReq.write}
                disabled={rejectReq.isLoading || approveReq.isLoading}
              >
                Reject
              </button>
            )}
            {notVotedYet() && (
              <button
                onClick={approveReq.write}
                disabled={rejectReq.isLoading || approveReq.isLoading}
              >
                Approve
              </button>
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
          {message && (
            <p>
              {message}
              <a href={`${process.env.NEXT_PUBLIC_BLOXPLORER}tx/${txHash}`}>
                {txHash}
              </a>
            </p>
          )}
        </div>
      }
    </div>
  );
};

export default ProposalItem;
