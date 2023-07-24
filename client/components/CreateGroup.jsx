import { useContractRead, useContractWrite, useDisconnect } from "wagmi";
import Styles from "./../styles/CreateGroup.module.css";
import { group_abi } from "../util";
import { useCallback, useState } from "react";
import { addToast } from "../state_management/slices/toast";
import { useDispatch } from "react-redux";

export default function CreateGroup() {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: group_abi,
    functionName: "createNewGroup",
    onSettled: (data) => {
      dispatch(addToast({ title: "Group Created", body: data.hash }));
    },
    onError: (error) => {
      dispatch(
        addToast({ title: "Error ", body: JSON.stringify(error?.details) })
      );
    },
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
        <h4>Create a new group by entering a 1 to 20 character long name</h4>
      </div>
      <div className={Styles.componentContainer}>
        <input
          type="text"
          className={Styles.nameInput}
          id="name-input"
          placeholder="Enter group name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={Styles.createButton}
          onClick={createGroup}
          disabled={name.length < 1 || name.length > 30}
        >
          Create
        </button>
      </div>
      <div className={Styles.componentContainer}>
        {isLoading && (
          <h5>Please check wallet and sign the pending transaction </h5>
        )}
      </div>
    </div>
  );
}
