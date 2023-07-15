import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GroupDetails } from "../../components/GroupDetails";
import { useContractEvent, useContractRead, useAccount } from "wagmi";
import { shg_abi } from "../../util";
import CreateProposal from "../../components/CreateProposal";
import MemberInfo from "../../components/MemberInfo";

export default function Group() {
  const router = useRouter();
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
    eventName: "UserBalanceUpdated",
    listener(log) {
      setMemberBal((prev) => {
        return prev.map((member) => {
          return {
            ...member,
            balance:
              log[0].args._member == member.address
                ? log[0].args._amount
                : member.balance,
          };
        });
      });
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "UserBalanceUpdated",
    listener(log) {
      setBalance((prev) => prev + parseInt(log[0].args._amount));
      setMemberBal((prev) => {
        return prev.map((member) => {
          return {
            ...member,
            balance:
              log[0].args._member == member.address
                ? parseInt(log[0].args._amount)
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
              <MemberInfo membersInfo={memberBal} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
