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

const ProposalItem = ({ address, proposalId }) => {
  const [proposalInfo, setProposalInfo] = useState(initialState);
  const [voterDetails, setVoter] = useState({});
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");
  const status = [
    "Voting period",
    "Approved",
    "Cancelled",
    "Rejected",
    "Settled",
  ];

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
        console.log("inisde this temp we have", temp, data);
        setProposalInfo(temp);
      }
    },
  });

  useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "getApproversAndRejecters",
    args: [proposalId],
    onSettled(data, error) {
      console.log(" setVoter Settled", { data, error });
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
          console.log("inside here we are", pid);
          setProposalInfo((prev) => ({ ...prev, currentStatus: 2 }));
        }
      }
    },
  });
  useContractEvent({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: shg_abi,
    eventName: "proposalApproved",
    listener(log) {
      //  console.log("NewGroupCreated", log);
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: shg_abi,
    eventName: "proposalRejected",
    listener(log) {
      //  console.log("NewGroupCreated", log);
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: shg_abi,
    eventName: "ProposalClaimed",
    listener(log) {
      //  console.log("NewGroupCreated", log);
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

  const isOwner = proposalInfo.proposer == accountInfo?.address;
  const remainingSecond =
    parseInt(proposalInfo.proposalTime) - Math.floor(Date.now() / 1000);
  const hasAlreadyVoted =
    voterDetails?.length > 0
      ? voterDetails[0][accountInfo?.address] ||
        voterDetails[1][accountInfo?.address]
      : false;
  const isClaimedOrRejected = proposalInfo.currentStatus > 1;
  const isAvailableToClaim = proposalInfo.currentStatus == 1;

  const claimReq = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "claimApprovedAmount",
    args: [proposalId],
    onSuccess(data) {
      // console.log("withdrawAmount Success", data);
      //  setBalance((prev) => prev - parseInt(log[0].args._amount=);
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
      // console.log("withdrawAmount Success", data);
      //  setBalance((prev) => prev - parseInt(log[0].args._amount));
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
      // console.log("withdrawAmount Success", data);
      //  setBalance((prev) => prev - parseInt(log[0].args._amount));
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

  //   uint amount;
  // address proposer;
  // uint proposalId;
  // string purpose;
  // uint monthlyInterestRate;
  // bool claimed;
  // uint loanDurationInMonth;
  // address[] approvers;
  // address[] rejecters;
  // uint proposalTime;
  return (
    <div className={styles.proposalItemContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
          // alignItems:"baseline",
          // backgroundColor:"gray",
          marginTop: "0px",
        }}
      >
        <h4>Proposal id: {parseInt(proposalInfo.proposalId)}</h4>
        <h4>Amount(wei): {parseInt(proposalInfo.amount)}</h4>
        <h4>
          Interest rate/Month(wei): {parseInt(proposalInfo.monthlyInterestRate)}
        </h4>
        {remainingSecond > 0 && !isClaimedOrRejected && (
          <h4
            style={{
              // marginLeft: "40px",
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px",
              verticalAlign: "top",
            }}
          >
            Voting closes in: <Timer seconds={remainingSecond}></Timer>
          </h4>
        )}
        <h4>Duration: ${parseInt(proposalInfo.loanDurationInMonth)} Month</h4>
        <h4>{status[proposalInfo.currentStatus]}</h4>
        <h4>Votes: 0 / {memberInfo?.data?.length - 1}</h4>
      </div>
      {
        <div className={styles.purposeContainer}>
          {/* <h2>Purpose</h2> */}
          <p>{proposalInfo.purpose}</p>
          <div className={styles.approveButtonContainer}>
            {!isOwner && !hasAlreadyVoted && !isClaimedOrRejected && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={rejectReq.write}
              >
                Reject
              </button>
            )}
            {!isOwner && !hasAlreadyVoted && !isClaimedOrRejected && (
              <button onClick={approveReq.write}>Approve</button>
            )}

            {isOwner && !isClaimedOrRejected && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={cancelReq.write}
              >
                Cancel
              </button>
            )}
            {isOwner && isAvailableToClaim && (
              <button onClick={claimReq.write}>Claim</button>
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
