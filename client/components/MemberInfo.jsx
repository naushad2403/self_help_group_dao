import React from "react";
import styles from "../styles/MemberInfo.module.css";
import { parseToEther } from "../util";

const MemberInfo = ({ membersInfo }) => {
  return (
    <div className={styles.memberInfoWrapper}>
      <h2 className={styles.memberHeading}>Members</h2>
      <div className={styles.memberInfo}>
        <span>Accounts</span>
        <span> Balance</span>
      </div>

      <div>
        {(membersInfo || []).map((x) => {
          return (
            <div className={styles.memberInfo} key={x.address}>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.memberInfoAnchor}
                href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${x.address}`}
              >
                {x.address}:
              </a>{" "}
              <span style={{}}>{parseToEther(x.balance)} SEP </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberInfo;
