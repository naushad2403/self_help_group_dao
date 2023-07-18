import React from "react";
import styles from "../styles/MemberInfo.module.css";
import { parseToEther } from "../util";

const DepositerInfo = ({ memberInfo }) => {
  console.log("inside this memeberInfo", memberInfo);
  return (
    <div className={styles.memberInfoWrapper}>
      <h2 className={styles.memberHeading}>Depositors</h2>
      <div className={styles.memberInfo}>
        <span>Accounts</span>
        <span> Amount</span>
      </div>

      <div>
        {(memberInfo || []).map((x) => {
          return (
            <div className={styles.memberInfo} key={x.address}>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.memberInfoAnchor}
                href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${x.member}`}
              >
                {x.member}
              </a>{" "}
              <span style={{}}>{parseToEther(x.amount)} ETH </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepositerInfo;
