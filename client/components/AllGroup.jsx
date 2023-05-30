import { useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { group_abi } from "../util";
import { useCallback } from "react";
import MyGroupItem from "./MyGroupItem";

export default function AllGroup({ address }) {
  const { data, isLoading, isSuccess } = useContractRead({
    address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    abi: group_abi,
    functionName: "getAllGroup",
  });

  const createGroup = useCallback(() => {
    write({
      args: ["Naushad"],
    });
  });

  console.log(data, isLoading, isSuccess);

  return (
    <div class={Styles.myGroup}>
      {data?.map((x) => {
        return <MyGroupItem key={x} address={x}></MyGroupItem>;
      })}
      {/* <input
        type="text"
        class={Styles.nameInput}
        id="name-input"
        placeholder="Enter group name"
      />
      <button className={Styles.createButton} onClick={createGroup}>
        Create
      </button> */}
    </div>
  );
}
