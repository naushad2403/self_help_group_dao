import { useContractEvent, useContractRead, useContractWrite } from "wagmi";
import Styles from "./../styles/MyGroup.module.css";
import { group_abi } from "../util";
import { useState } from "react";
import MyGroupItem from "./MyGroupItem";
import { Switch } from "./Switch";

export default function MyGroup() {
  const [groups, setGroups] = useState([]);
  const [onlyJoined, setOnlyJoined] = useState(false);
  const { isFetching, error } = useContractRead({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: group_abi,
    functionName: "getAllGroup",
    onSettled(data, error) {
      setGroups((prev) => [...prev, ...(data || [])]);
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS,
    abi: group_abi,
    eventName: "NewGroupCreated",
    listener(log) {
      setGroups((prev) => [...prev, log[0].args[0]]);
    },
  });

  const onChange = (e) => {
    setOnlyJoined(e.target.checked);
  };

  if (isFetching) {
    return <h1 className={Styles.textColor}> Loading...</h1>;
  }

  if (groups.length == 0) {
    return (
      <p className={Styles.textColor}>
        No group present. Please create one to get started
      </p>
    );
  }

  return (
    <div className={Styles.myGroup}>
      <div className={Styles.MyGroupItem}>
        <h4>Address</h4>
        <h4>Name</h4>
        <h4>Balance</h4>
        <h4>Person</h4>
        <h4>Status</h4>
        <Switch value={onlyJoined} onChange={onChange} label={"Only Joined"} />
      </div>
      {[...new Set(groups)]?.map((x, index) => {
        return (
          <MyGroupItem key={index} address={x} forJoined={onlyJoined}>
            {" "}
          </MyGroupItem>
        );
      })}
    </div>
  );
}
