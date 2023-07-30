import React, { useState } from "react";
import styles from "../styles/GroupView.module.css";
import { parseToEther, shg_abi } from "../util";
import { useBalance, useContractWrite, useContractEvent } from "wagmi";
import { useDispatch } from "react-redux";
import { addToast } from "../state_management/slices/toast";
import { ethers } from "ethers";

export const GroupDetails = ({ address }) => {
  const [withdrawVal, setWithdrawVal] = useState();
  const [depositVal, setDepositVal] = useState();
  const [balance, setBalance] = useState();

  const dispatch = useDispatch();

  useBalance({
    address: address,
    onSuccess(data) {
      setBalance(data?.value);
    },
  });

  const withdrawObj = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "withdrawAmount",
    args: [withdrawVal ? ethers.parseEther(withdrawVal.toString()) : "0"],
    onSuccess(data) {
      dispatch(
        addToast({ title: `Withdraw Transaction sent`, body: data.hash })
      );
    },
    onError(error) {
      dispatch(addToast({ title: "Error", body: error?.details }));
    },
  });

  const depositObj = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "deposit",
    value: depositVal ? ethers.parseEther(depositVal.toString()) : "0",

    onSuccess(data) {
      dispatch(
        addToast({ title: `Deposit Transaction sent`, body: data.hash })
      );
    },
    onError(error) {
      dispatch(addToast({ title: "Error", body: error?.details }));
    },
  });

  // useContractEvent({
  //   address: address,
  //   abi: shg_abi,
  //   eventName: "Withdrawn",
  //   listener(log) {
  //     dispatch(
  //       addToast({
  //         title: `Transaction successful`,
  //         body: ` amount ${log[0].args._amount} withdrawn from your account`,
  //       })
  //     );
  //   },
  // });

  // useContractEvent({
  //   address: address,
  //   abi: shg_abi,
  //   eventName: "Deposited",
  //   listener(log) {
  //     dispatch(
  //       addToast({
  //         title: `Transaction successful`,
  //         body: ` amount ${log[0].args._amount} deposited from your account`,
  //       })
  //     );
  //   },
  // });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "GroupBalanceUpdated",
    listener(log) {
      if (log.length > 0) {
        console.log("inside this balance group", log[0].args.balance);
        setBalance(log[0].args.balance);
      }
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "GroupBalanceUpdated",
    listener(log) {
      if (log.length > 0) {
        setBalance(log[0].args.balance);
      }
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
        <h3>Balance: {parseToEther(balance)} SEP</h3>
        <div className={styles.balanceDetail}>
          <input
            type="number"
            className={styles.amountInput}
            id="name-input"
            placeholder="Enter amount in ether"
            value={depositVal}
            onChange={(e) => setDepositVal(e.target.value)}
          />
          <button
            style={{ width: "80px" }}
            onClick={() => {
              depositObj.write();
              setDepositVal("");
            }}
            disabled={depositObj.isLoading || withdrawObj.isLoading}
          >
            Deposit {depositVal} SEP
          </button>
          <input
            type="number"
            className={styles.amountInput}
            id="name-input"
            placeholder="Enter amount in ether"
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
            Withdraw {withdrawVal} SEP
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
      ></div>
    </>
  );
};
