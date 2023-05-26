import { useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { group_abi } from "../util";
import { useCallback, useEffect } from "react";
import MyGroupItem from "./MyGroupItem";
import { useDispatch } from "react-redux";
import { updateGroup } from "../state_management/slices/group";

export default function MyGroup() {
  const { data, isLoading, isSuccess } = useContractRead({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: group_abi,
    functionName: "getAllGroup",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateGroup(data));
    }
  }, [data, dispatch]);

  // console.log(data, isLoading, isSuccess);

  return (
    <div class={Styles.myGroup}>
      <div className={Styles.MyGroupItem}>
        <h3>Address</h3>
        <h3>Name</h3>
        <h3>Balance</h3>
        <h3>Person</h3>
        <h3>Status</h3>
        <h3></h3>
      </div>
      {data?.map((x) => {
        return (
          <MyGroupItem key={x} address={x}>
            {" "}
          </MyGroupItem>
        );
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
