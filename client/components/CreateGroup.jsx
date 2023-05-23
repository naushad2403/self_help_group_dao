import { useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/CreateGroup.module.css";
import { group_abi } from "../util";
import { useCallback, useState } from "react";

export default function CreateGroup() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    abi: group_abi,
    functionName: "createNewGroup",
  });

  const [name, setName] = useState("");

  const createGroup = useCallback(() => {
    write({
      args: [name],
    });
  });

  console.log("name", name);

  return (
    <div>
      <div class={Styles.componentContainer}>
        <input
          type="text"
          class={Styles.nameInput}
          id="name-input"
          placeholder="Enter group name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          disabled={name.length == 0}
          className={Styles.createButton}
          onClick={createGroup}
        >
          Create
        </button>
      </div>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
