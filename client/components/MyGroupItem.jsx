import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
} from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { shg_abi } from "../util";
import { useCallback } from "react";
import { useRouter } from "next/router";

export default function MyGroupItem({ address }) {
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

  console.log(memberInfo);
  console.log(!memberInfo?.data?.includes(accountInfo.address));
  console.log(accountInfo.address);

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
        <button>Join Group</button>
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
