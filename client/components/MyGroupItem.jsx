import { useBalance, useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { shg_abi } from "../util";
import { useCallback } from "react";

export default function MyGroupItem({ address }) {
  const nameInfo = useContractRead({
    address: address,
    abi: shg_abi,
    functionName: "name",
  });

  const balanceInfo = useBalance({
    address: address,
  });

  console.log(nameInfo);

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
      <p>{Math.floor(Math.random() * 100)}</p>
      {Math.random() < 0.5 ? (
        <button>Join Group</button>
      ) : (
        <p>You are member</p>
      )}
      {<button> View Group</button>}
    </div>
  );
}
