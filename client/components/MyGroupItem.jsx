import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  useContractEvent,
  usePrepareContractWrite,
} from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { shg_abi } from "../util";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function MyGroupItem({ address, forJoined }) {
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");
  const [members, setMembers] = useState([]);
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

  const balanceInfo = useBalance({
    address: address,
  });

  const joiningGroup = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "join",
    onSuccess(data) {
      setMessage(`Joining Request sent, Tx Hash:`);
      setTxHash(data.hash);
    },

    onError(error) {
      setMessage(`Error: ${error?.details}`);
    },
  });

  console.log("inside this joinGroup", joiningGroup);

  useContractEvent({
    address: address,
    abi: shg_abi,
    eventName: "MembersJoined",
    listener(log) {
      if (log.length > 0) {
        setMembers((prev) => [...prev, log[0].args._member]);
      }
    },
  });

  // useEffect(() => {
  //   nameInfo &&
  //     dispatch(
  //       updateGroup({
  //         address,
  //         info: {
  //           name: nameInfo?.data,
  //           members: memberInfo?.data,
  //           balance: balanceInfo?.data,
  //         },
  //       })
  //     );
  // }, [nameInfo, memberInfo, balanceInfo]);

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
        <p>
          {balanceInfo?.data?.formatted} {balanceInfo?.data?.symbol}
        </p>
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
      {message && (
        <p
          style={{
            border: "2px solid",
            borderRadius: "5px",
            padding: "5px",
            width: "60%",
            marginLeft: "20%",
            color: "white",
            borderBlockColor: "white",
          }}
        >
          {message}
          <a href={`${process.env.NEXT_PUBLIC_BLOXPLORER}tx/${txHash}`}>
            {txHash}
          </a>
        </p>
      )}
    </>
  );
}
