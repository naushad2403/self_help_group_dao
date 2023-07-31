import React from "react";
import styles from "../styles/LoadDetails.module.css";
import { timestampToDateTime, parseToEther } from "../util";

const LoanDetails = ({ info }) => {
  let ans = {};
  ans.Date = timestampToDateTime(parseInt(info.date));
  ans.Amount = `${parseToEther(info.amount)} SEP`;
  ans.InterestRate = `${parseFloat(info.interestRate)}%/ Year`;
  ans.ProposalId = parseInt(info.proposalId);
  ans.CurrentBalance = `${parseToEther(info.currentBalance)} SEP`;

  return (
    <div className={styles.loanDetailsWrapper}>
      <h3>Your Loan Details</h3>
      {Object.entries(ans).map(([key, value], index) => {
        return (
          <div className={styles.loanDetailsData} key={index}>
            <p>{key} </p>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LoanDetails;
