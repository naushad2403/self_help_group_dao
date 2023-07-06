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

const ProposalItem = ({ address, proposalId }) => {
  const [proposalInfo, setProposalInfo] = useState("");
  const [voterDetails, setVoter] = useState({});
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");

  const accountInfo = useAccount();

  useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "borrowProposal",
    args: [proposalId],
    onSettled(data, error) {
      console.log(" borrowProposal Settled", { data, error });
      setProposalInfo(data);
      // setGroups((prev) => [...prev, ...(data || [])]);
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
      // setGroups((prev) => [...prev, ...(data || [])]);
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: shg_abi,
    eventName: "proposalCancelled",
    listener(log) {
      console.log(log.args._proposalId);

      //  console.log("NewGroupCreated", log);
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

  const isOwner = proposalInfo[1] == accountInfo?.address;
  const remainingSecond =
    parseInt(proposalInfo[7]) - Math.floor(Date.now() / 1000);
  const hasAlreadyVoted =
    voterDetails?.length > 0
      ? voterDetails[0][accountInfo?.address] ||
        voterDetails[1][accountInfo?.address]
      : false;
  const isClaimedOrRejected = proposalInfo[5] > 1;
  const isAvailableToClaim = proposalInfo[5] == 1;
  console.log(
    "proposalInfo",
    proposalInfo,
    proposalInfo[5],
    isAvailableToClaim
  );

  // console.log('V, A',voterDetails, accountInfo);
  // const isSettledOrRejected =

  console.log(
    "remainingSecond",
    remainingSecond,
    proposalInfo[7],
    Math.floor(Date.now() / 1000)
  );

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
      // console.log("withdrawAmount Success", data);
      //  setBalance((prev) => prev - parseInt(log[0].args._amount));
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
        <h4>Amount(wei): {parseInt(proposalInfo[0])}</h4>
        <h4>Interest rate/Month(wei): {parseInt(proposalInfo[4])}</h4>
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
        <h4>Duration: ${parseInt(proposalInfo[6])} Month</h4>
        <h4>
          {
            ["Voting period", "Approved", "Cancelled", "Rejected", "Settled"][
              proposalInfo[5]
            ]
          }
        </h4>
        <h4>Votes: 0 / {memberInfo?.data?.length - 1}</h4>
      </div>
      {
        <div className={styles.purposeContainer}>
          {/* <h2>Purpose</h2> */}
          <p>{proposalInfo[3]}</p>
          <div className={styles.approveButtonContainer}>
            {!isOwner && !hasAlreadyVoted && !isClaimedOrRejected && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={rejectReq.write}
              >
                Raject
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
