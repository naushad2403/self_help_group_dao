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
    setName("");
  });
  console.log(`Transaction Completed, Please check the transaction hash: 
     ${JSON.stringify(data)}
        or Refresh the Groups to see newly created group`);

  return (
    <div className={Styles.root}>
      <div className={Styles.componentContainer}>
        <h4>Create a new group by entering a name</h4>
      </div>
      <div className={Styles.componentContainer}>
        <input
          type="text"
          class={Styles.nameInput}
          id="name-input"
          placeholder="Enter group name"
          value={name}
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
      <div className={Styles.componentContainer}>
        {isLoading && (
          <h5>Please check wallet and sign the pending transaction </h5>
        )}

        {isSuccess && (
          <h5 className={Styles.SuccessfulMessage}>
            Transaction Completed Please check the transaction hash:
            <a
              target="_blank"
              className={Styles.HashStyle}
              href={`https://etherscan.io/tx/${data.hash}`}
              rel="noreferrer"
            >
              {" "}
              {data.hash}
            </a>
            or Refresh the Groups to see newly created group
          </h5>
        )}
      </div>
    </div>
  );
}
