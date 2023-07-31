import React from "react";
import styles from "../styles/DepositorInfo.module.css";
import { parseToEther } from "../util";

const DepositerInfo = ({ depositorInfo }) => {
  console.log("inside this memeberInfo", depositorInfo);
  return (
    <div className={styles.depositorInfoWrapper}>
      <h2 className={styles.depositorHeading}>Depositors</h2>
      <div className={styles.depositorInfo}>
        <span>Accounts</span>
        <span> Amount</span>
      </div>

      <div>
        {(depositorInfo || []).map((x) => {
          return (
            <div className={styles.depositorInfo} key={x.address}>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.depositorInfoAnchor}
                href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${x.depositor}`}
              >
                {x.member}
              </a>{" "}
              <span style={{}}>{parseToEther(x.amount)} SEP </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepositerInfo;
