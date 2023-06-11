import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { parseEther, parseGwei } from "viem";
import { useBalance, useContractWrite } from "wagmi";
import { shg_abi } from "../../util";

export default function Group() {
  const router = useRouter();
  const info = useSelector((state) => state.info);
  const [depositVal, setDepositVal] = useState(0);
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
      console.log("withdrawAmount Success", data);
    },
  });

  const balanceInfo = useBalance({
    address: router.query.address,
  });

  console.log(
    "Group view info",
    balanceInfo,
    balanceInfo?.data?.value,
    balanceInfo?.data?.formatted,
    balanceInfo?.data?.symbol
  );

  const depositAmount = () => {};

  const withdrawAmount = () => {};

  return (
    <>
      <div className={styles.container}>
        <div className={styles.basicDetail}>
          <h3>Address: {router.query.address}</h3>
          <h3>Name: G1</h3>
          <h3>
            Balance: {balanceInfo?.data?.formatted} {balanceInfo?.data?.symbol}
          </h3>
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
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>

            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
          </div>
          <div
            style={{
              width: "1px",
              height: "500px",
              backgroundColor: "white",
              margin: "0 10px",
            }}
          ></div>
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
