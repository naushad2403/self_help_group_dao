import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GroupDetails } from "../../components/GroupDetails";

import {
  useBalance,
  useContractEvent,
  useContractRead,
  useAccount,
} from "wagmi";
import { shg_abi } from "../../util";
import CreateProposal from "../../components/CreateProposal";

export default function Group() {
  const router = useRouter();
  const info = useSelector((state) => state.info);
  const [balance, setBalance] = useState();
  const [memberBal, setMemberBal] = useState();
  const [proposalCounter, setProposalCounter] = useState();

  useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "counter",
    onSettled(data, error) {
      console.log("counter", data);
      setProposalCounter(parseInt(data));
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Withdrawn",
    listener(log) {
      //  console.log("NewGroupCreated", log);
      setBalance((prev) => prev - parseInt(log[0].args._amount));
      setMemberBal((prev) => {
        return prev.map((member) => {
          return {
            ...member,
            balance:
              log[0].args._member == member.address
                ? member.balance - parseInt(log[0].args._amount)
                : member.balance,
          };
        });
      });
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "Deposited",
    listener(log) {
      setBalance((prev) => prev + parseInt(log[0].args._amount));
      setMemberBal((prev) => {
        return prev.map((member) => {
          return {
            ...member,
            balance:
              log[0].args._member == member.address
                ? member.balance + parseInt(log[0].args._amount)
                : member.balance,
          };
        });
      });
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

  const { isFetching, isLoading, data } = useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "getMemberWithBalance",
    onSettled(data, error) {
      if (!data) return;
      setMemberBal(
        data[0].map((addr, balIdx) => {
          return { address: addr, balance: parseInt(data[1][balIdx]) };
        })
      );
    },
  });

  useBalance({
    address: router.query.address,
    onSuccess(data) {
      // console.log("balance Success", data);
      setBalance(parseInt(data?.value));
    },
  });

  const accountInfo = useAccount();

  useEffect(() => {
    if (memberBal?.length > 0) {
      const isPresent = memberBal?.find(
        (item) => item.address === accountInfo.address
      );

      if (!isPresent) {
        router.replace("/");
      }
    }
  }, [memberBal, accountInfo]);

  if (
    memberBal?.length == 0 &&
    !memberBal?.find((item) => item.address === accountInfo.address)
  ) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        {isFetching || isLoading ? null : (
          <>
            <GroupDetails address={router.query.address} />

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
                  {proposalCounter > 0 ? (
                    <button
                      style={{ marginLeft: "20px", height: "40px" }}
                      onClick={() => {
                        console.log(`/proposal/${router.query.address}`);
                        router.push(`/proposal/${router.query.address}`);
                      }}
                    >
                      View Proposals
                    </button>
                  ) : (
                    <span> Available: 0</span>
                  )}
                </h2>
                {
                  <CreateProposal
                    address={router.query.address}
                  ></CreateProposal>
                }
              </div>
              <div style={{ marginLeft: "50px" }}>
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
                          marginLeft: "80px",
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
                        <span style={{}}>{x.balance} ETH </span>
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
          </>
        )}
      </div>
    </>
  );
}
