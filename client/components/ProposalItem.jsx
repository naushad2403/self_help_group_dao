import React, { useState } from "react";
import styles from './../styles/ProposalItem.module.css'
import { useContractRead } from "wagmi";
import { Router, useRouter } from "next/router";
import { shg_abi } from "../util";

const ProposalItem = ({ address, proposalId }) => {
console.log('proposal item', address, proposalId)
  const [proposalInfo, setProposalInfo] = useState("");
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
          justifyContent: "space-between",
        }}
      >
        <h2>Amount(wei): {parseInt(proposalInfo[0])}</h2>
        <h2>Interest rate/Month(wei): {parseInt(proposalInfo[4])}</h2>
        <h2>Duration: ${parseInt(proposalInfo[6])} Month</h2>
      </div>

      <div className={styles.purposeContainer}>
        <h2>Purpose</h2>
        <p>{proposalInfo[3]}</p>
        <div className={styles.approveButtonContainer}>
          <button>Approve</button>
          <button>Raject</button>
        </div>
      </div>
    </div>
  );
};

export default ProposalItem;
