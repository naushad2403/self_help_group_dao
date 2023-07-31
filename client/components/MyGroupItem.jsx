import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  useContractEvent,
} from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { shg_abi } from "../util";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToast } from "../state_management/slices/toast";
import { parseToEther } from "../util";

export default function MyGroupItem({ address, forJoined }) {
  const [members, setMembers] = useState([]);

  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();

  const accountInfo = useAccount();
  const router = useRouter();
  const nameInfo = useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "name",
  });

  useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "getAllMembers",
    onSuccess(data) {
      setMembers(data);
    },
  });

  useBalance({
    address: address,
    onSuccess: (data) => {
      console.log("inisde this data", data);
      setBalance(data.value);
    },
  });

  const joiningGroup = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "join",
    onSuccess(data) {
      dispatch(
        addToast({ title: "Joining Request sent, Tx Hash:", body: data.hash })
      );
    },

    onError(error) {
      addToast({ title: "Error", body: error?.details });
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "MembersJoined",
    listener(log) {
      if (log.length > 0) {
        setMembers((prev) => [...prev, log[0].args.member]);
      }
    },
  });

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "GroupBalanceUpdated",
    listener(log) {
      if (log.length > 0) {
        log[0].args.balance;
      }
    },
  });

  const isMember = () => {
    return members?.includes(accountInfo.address);
  };

  if (forJoined && !isMember()) {
    return null;
  }

  return (
    <>
      <div className={Styles.MyGroupItem}>
        <a
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_BLOXPLORER}address/${address}`}
          rel="noreferrer"
        >
          {"..." + address.substr(-5)}
        </a>
        <p>{nameInfo?.data}</p>
        <p>{parseToEther(balance)} SEP</p>
        <p>{members.length}</p>
        {!isMember() ? (
          <button
            onClick={joiningGroup.write}
            disabled={joiningGroup.isLoading}
          >
            Join Group
          </button>
        ) : (
          <p>You are member</p>
        )}
        {
          <button
            onClick={() => router.push(`/group/${address}`)}
            disabled={!isMember()}
          >
            View Group
          </button>
        }
      </div>
    </>
  );
}
