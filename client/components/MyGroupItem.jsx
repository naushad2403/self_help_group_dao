import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { shg_abi } from "../util";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateGroup } from "../state_management/slices/group";

export default function MyGroupItem({ address }) {
  const dispatch = useDispatch();
  const accountInfo = useAccount();
  const router = useRouter();
  const nameInfo = useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "name",
  });

  const memberInfo = useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "getAllMembers",
  });

  const balanceInfo = useBalance({
    address: address,
  });

  const joiningGroup = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "join",
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

  return (
    <div className={Styles.MyGroupItem}>
      <a
        target="_blank"
        href={`https://etherscan.io/address/${address}`}
        rel="noreferrer"
      >
        {"..." + address.substr(-5)}
      </a>
      <p>{nameInfo?.data}</p>
      <p>
        {balanceInfo?.data?.formatted} {balanceInfo?.data?.symbol}
      </p>
      <p>{memberInfo?.data?.length}</p>
      {!memberInfo?.data?.includes(accountInfo.address) ? (
        <button onClick={joiningGroup.write}>Join Group</button>
      ) : (
        <p>You are member</p>
      )}

      {
        <button onClick={() => router.push(`/group/${address}`)}>
          {" "}
          View Group
        </button>
      }
    </div>
  );
}
