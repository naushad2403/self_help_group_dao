import React from "react";
import styles from "../styles/LoadDetails.module.css";

const LoanDetails = ({ info }) => {
  return (
    <div className={styles.loanDetailsWrapper}>
      <h3>Your Loan Details</h3>
      {Object.entries(info).map(([key, value], index) => {
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
