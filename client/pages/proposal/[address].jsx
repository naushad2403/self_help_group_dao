import React, { useState } from "react";

import { useContractRead, useContractEvent } from "wagmi";
import { shg_abi } from "../../util";
import ProposalItem from "../../components/ProposalItem";
import { useRouter } from "next/router";
import { GroupDetails } from "../../components/GroupDetails";
import { Switch } from "../../components/Switch";
import Styles from "../../styles/Switch.module.css";

const Proposals = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const [onlyUser, setOnlyUser] = useState(false);

  useContractRead({
    address: router.query.address,
    abi: shg_abi,
    functionName: "counter",
    onSettled(data, error) {
      setCount(parseInt(data));
    },
  });

  useContractEvent({
    address: router.query.address,
    abi: shg_abi,
    eventName: "ProposalSubmitted",
    listener(log) {
      setCount(parseInt(log.args._proposalId));
    },
  });

  const onChange = (e) => {
    setOnlyUser(e.target.checked);
  };

  return (
    <div>
      <div>
        <GroupDetails address={router.query.address} />
        <div className={Styles.filterWrapper}>
          <Switch value={onlyUser} onChange={onChange} label={"My Proposals"} />
        </div>

        {new Array(count).fill(0).map((proposal, index) => {
          return (
            <ProposalItem
              key={index}
              address={router.query.address}
              proposalId={index}
              onlyUser={onlyUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Proposals;
