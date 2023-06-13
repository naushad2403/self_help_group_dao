

import React, { useState } from "react";
import { shg_abi } from "../util";
import { useContractRead, useContractEvent } from "wagmi";
import ProposalItem from "./ProposalItem";




const Proposals = ({address}) => {
  const [count, setCount] = useState(10)

    const counter = useContractRead({
      address: address,
      abi: shg_abi,
      functionName: "counter",
      onSettled(data, error) {
        console.log('counter',data)
        // console.log("Settled", { data, error });
        // setCount(data);
      },
    });

    useContractEvent({
      address: address,
      abi: shg_abi,
      eventName: "NewProposalSubmitted",
      listener(log) {
       setCount((prev)=>prev+1)
      },
    });
  return (
    <div>
      <div>
        {new Array(count).fill(10).map((proposal, index) => (
          <ProposalItem key={index} proposalId={index}></ProposalItem>
        ))}
      </div>
    </div>
  );
};

export default Proposals;
