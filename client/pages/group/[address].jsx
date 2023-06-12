import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { parseEther, parseGwei } from "viem";
import {
  useBalance,
  useContractEvent,
  useContractRead,
  useContractWrite,
} from "wagmi";
import { shg_abi } from "../../util";

export default function Group() {
  const router = useRouter();
  const info = useSelector((state) => state.info);
  const [depositVal, setDepositVal] = useState(0);
  const [balance, setBalance] = useState();
  const [memberBal, setMemberBal] = useState();
  const [withdrawVal, setWithdrawVal] = useState(0);

  const depositObj = useContractWrite({
    address: router.query.address,
    abi: shg_abi,
    functionName: "deposit",
    value: depositVal,
    onSuccess(data) {
      console.log("Success", data);
    },
  });

  const withdrawObj = useContractWrite({
    address: router.query.address,
    abi: shg_abi,
    functionName: "withdrawAmount",
    args: [withdrawVal],
    onSuccess(data) {
      // console.log("withdrawAmount Success", data);
      //  setBalance((prev) => prev - parseInt(log[0].args._amount));
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Withdrawn",
    listener(log) {
      //  console.log("NewGroupCreated", log);
      setBalance((prev) => prev - parseInt(log[0].args._amount));
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Deposited",
    listener(log) {
      setBalance((prev) => prev + parseInt(log[0].args._amount));
    },
  });

  const memberBalance = useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "getMemberWithBalance",
    onSettled(data, error) {
      console.log(" memberBalance Settled", { data, error });
      if (!data) return;
      setMemberBal(
        data[0].map((addr, balIdx) => {
          return { address: addr, balance: parseInt(data[1][balIdx]) };
        })
      );

      // setGroups((prev) => [...prev, ...(data || [])]);
    },
  });

  const balanceInfo = useBalance({
    address: router.query.address,
    onSuccess(data) {
      // console.log("balance Success", data);
      setBalance(parseInt(data?.value));
    },
  });

  console.log("memberBal", memberBal);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.basicDetail}>
          <h3>
            Address:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${router.query.address}`}
            >
              {router.query.address}
            </a>
          </h3>
          <h3>Name: G1</h3>
          <h3>Balance: {balance}</h3>
          <input
            type="text"
            className={styles.amountInput}
            id="name-input"
            placeholder="Enter amount in wei"
            value={depositVal}
            onChange={(e) => setDepositVal(e.target.value)}
          />
          <button style={{ width: "80px" }} onClick={depositObj.write}>
            Deposit
          </button>
          <input
            type="text"
            className={styles.amountInput}
            id="name-input"
            placeholder="Enter amount in wei"
            value={withdrawVal}
            onChange={(e) => setWithdrawVal(e.target.value)}
          />
          <button style={{ width: "80px" }} onClick={withdrawObj.write}>
            Withdraw
          </button>
        </div>
        <div className={styles.allDetail}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "black",
                textShadow:
                  "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
              }}
            >
              Members
            </h2>
            <div>
              {(memberBal || []).map((x) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "30px",
                      justifyContent: "flex-start",
                    }}
                    key={x.address}
                  >
                    {" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      style={{ width: "60%", textAlign: "left" }}
                      href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${x.address}`}
                    >
                      {x.address}:
                    </a>{" "}
                    <span style={{ marginRight: "20px" }}>
                      {x.balance} ETH{" "}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div
            style={{
              width: "5px",
              height: "500px",
              boxShadow:
                "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
              backgroundColor: "black",
              margin: "0 0 10px",
            }}
          ></div> */}
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "black",
                textShadow:
                  "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
              }}
            >
              {" "}
              Proposals
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
