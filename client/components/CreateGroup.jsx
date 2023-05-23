import { useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/CreateGroup.module.css";
import { group_abi } from "../util";
import { useCallback } from "react";

export default function CreateGroup() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0x869ABe51D6224889f8B89d709997722Cf6230eaE",
    abi: group_abi,
    functionName: "createNewGroup",
  });

  const createGroup = useCallback(() => {
    write({
      args: ["Naushad"],
    });
  });

  console.log(data, isLoading, isSuccess, write);

  return (
    <div class={Styles.componentContainer}>
      <input
        type="text"
        class={Styles.nameInput}
        id="name-input"
        placeholder="Enter group name"
      />
      <button className={Styles.createButton} onClick={createGroup}>
        Create
      </button>
    </div>
  );
}
