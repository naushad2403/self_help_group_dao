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
import CreateProposal from '../../components/CreateProposal';

export default function Group() {
  const router = useRouter();
  const info = useSelector((state) => state.info);
  const [depositVal, setDepositVal] = useState();
  const [balance, setBalance] = useState();
  const [memberBal, setMemberBal] = useState();
  const [withdrawVal, setWithdrawVal] = useState();
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");
  const [proposalCounter, setProposalCounter] = useState();
  
  useContractRead({
      address: router.query.address,
      abi: shg_abi,
      functionName: "counter",
      onSettled(data, error) {
        console.log("counter", data);
        setProposalCounter(parseInt(data));
        // console.log("Settled", { data, error });
        // setCount(data);
      },
    }); 

  const depositObj = useContractWrite({
    address: router.query.address,
    abi: shg_abi,
    functionName: "deposit",
    value: depositVal,
    onSuccess(data) {
      console.log("Success", data);
      setMessage(
        `Deposit Transaction sent, Amount will be update sooner Tx Hash:`
      );
      setTxHash(data.hash);
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
      setMessage(
        `Withdraw Transaction sent, Amount will be credit sooner Tx Hash:`
      );
      setTxHash(data.hash);
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Withdrawn",
    listener(log) {
      //  console.log("NewGroupCreated", log);
      setBalance((prev) => prev - parseInt(log[0].args._amount));
      setMemberBal((prev)=>{
         return prev.map((member)=>{
              return {
                ...member, balance: (log[0].args._member == member.address ? member.balance - parseInt(log[0].args._amount) : member.balance)
              }
          })
      })
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Deposited",
    listener(log) {
      setBalance((prev) => prev + parseInt(log[0].args._amount));
      setMemberBal((prev)=>{
         return prev.map((member)=>{
              return {
                ...member, balance: (log[0].args._member == member.address ? member.balance + parseInt(log[0].args._amount) : member.balance)
              }
          })
      })
    },
  });

    useContractEvent({
      address: router.query.address,
      abi: shg_abi,
      eventName: "ProposalSubmitted",
      listener(log) {
        setProposalCounter((prev) => prev + 1);
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
          <div className={styles.balanceDetail}>
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
              {" "}
              Proposals

              {
                proposalCounter > 0 ?
                <button
                style={{ marginLeft: "20px", height: "40px" }}
                onClick={() => {
                  console.log(`/proposal/${router.query.address}`);
                  router.push(`/proposal/${router.query.address}`);
                }}
              >
                View Proposals
              </button> : <span> Available: 0</span>
              }
            </h2>
            {<CreateProposal address={router.query.address}></CreateProposal>}
          </div>
          <div style={{marginLeft: "50px"}}>
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
                      marginLeft: "80px"
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
                    <span style={{ }}>
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
        </div>
      </div>
    </>
  );
}
