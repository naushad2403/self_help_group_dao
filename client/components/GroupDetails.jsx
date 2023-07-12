import React, { useState } from "react";
import styles from "../styles/GroupView.module.css";
import { shg_abi } from "../util";
import { useBalance, useContractWrite, useContractEvent } from "wagmi";

export const GroupDetails = ({ address }) => {
  const [withdrawVal, setWithdrawVal] = useState(0);
  const [depositVal, setDepositVal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");

  useBalance({
    address: address,
    onSuccess(data) {
      setBalance(parseInt(data?.value));
    },
  });

  const withdrawObj = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "withdrawAmount",
    args: [withdrawVal],
    onSuccess(data) {
      setMessage(
        `Withdraw Transaction sent, Amount will be credit sooner Tx Hash:`
      );
      setTxHash(data.hash);
    },
  });

  const depositObj = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "deposit",
    value: depositVal,
    onSuccess(data) {
      setMessage(
        `Deposit Transaction sent, Amount will be update sooner Tx Hash:`
      );
      setTxHash(data.hash);
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "Withdrawn",
    listener(log) {
      setBalance((prev) => prev - parseInt(log[0].args._amount));
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "Deposited",
    listener(log) {
      setBalance((prev) => prev + parseInt(log[0].args._amount));
    },
  });

  return (
    <>
      <div className={styles.basicDetail}>
        <h3>
          Address:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${address}`}
          >
            {address}
          </a>
        </h3>
        <h3>Name: G1</h3>
        <h3>Balance: {balance}</h3>
        <div className={styles.balanceDetail}>
          <input
            type="text"
            className={styles.amountInput}
            id="name-input"
            placeholder="Enter amount in wei"
            value={depositVal}
            onChange={(e) => setDepositVal(e.target.value)}
          />
          <button
            style={{ width: "80px" }}
            onClick={() => {
              depositObj.write();
              setDepositVal("");
            }}
            disabled={depositObj.isLoading || withdrawVal.isLoading}
          >
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
          <button
            style={{ width: "80px" }}
            onClick={() => {
              withdrawObj.write();
              setWithdrawVal("");
            }}
            disabled={withdrawObj.isLoading || depositObj.isLoading}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "green",
          padding: "10px",
          alignItems: "flex-end",

          // border: "1px solid",
        }}
      >
        {message && (
          <p>
            {message}
            <a href={`${process.env.NEXT_PUBLIC_BLOXPLORER}tx/${txHash}`}>
              {txHash}
            </a>
          </p>
        )}
      </div>
    </>
  );
};
