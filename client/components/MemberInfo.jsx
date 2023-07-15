import React from "react";
import styles from "../styles/MemberInfo.module.css";
<<<<<<< HEAD
import { parseToEther } from "../util";
=======
import { formateEther } from "../util";
>>>>>>> 0daaee3 (Updated balance events)

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
<<<<<<< HEAD
              <span style={{}}>{parseToEther(x.balance)} ETH </span>
=======
              <span style={{}}>{formateEther(x.balance)} ETH </span>
>>>>>>> 0daaee3 (Updated balance events)
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberInfo;
