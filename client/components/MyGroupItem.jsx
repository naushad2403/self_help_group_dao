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
      <a href="https://www.w3schools.com/${}">
        {"Address: ..." + address.substr(-5)}
      </a>
      <p>Name: {nameInfo?.data}</p>
      <p>
        {" "}
        Balance: {balanceInfo?.data?.formatted} {balanceInfo?.data?.symbol}
      </p>
      <p>Persons: 100</p>
      <button> Withdraw money</button>
      <button> View/Submit proposals</button>
    </div>
  );
}
