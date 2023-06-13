import React, { useState } from "react";
import styles from '../styles/CreateProposal.module.css'
import { shg_abi } from "../util";
import { useContractWrite } from "wagmi";

const CreateProposal = ({address}) => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [txHash, setTxHash] = useState("");
  const [message, setMessage] = useState("");

  const proposalMethod = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "submitLoanProposal",
    args: [amount, purpose, interestRate, duration],
    onSuccess(data) {
      console.log("Success", data);
      setMessage(
        `Proposal Transaction sent, Proposal will reflect in the list sooner, Tx Hash:`
      );
      setTxHash(data.hash);
    },
  });

  



  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = () => {
    console.log(amount, duration, purpose, interestRate)
    proposalMethod.write();
    setAmount("");
    setDuration("");
    setInterestRate("");

    setPurpose("");
    // Handle submission logic here
  };

  return (
    <div className={styles.container}>
      <h3>Write a proposal if you want to borrow money</h3>
      <div className={styles.inputContainer}>
        <h5>Enter amount:</h5>
        <input
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <h5>Enter duration on loan:</h5>
        <input
          placeholder="Enter duration in month"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <h5>Enter interest rate percentage per month:</h5>
        <input
          placeholder="Enter interest rate percentage"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </div>

      <h3 style={{ marginTop: "20px", marginBottom: "0px" }}>
        Explain the purpose in below box to convince for approval
      </h3>
      <textarea
        value={purpose}
        onChange={handlePurposeChange}
        placeholder="Explain your purpose here..."
        rows={4} // Adjust the number of rows as per your requirement
        style={{
          width: "98%",
          padding: "10px",
          fontSize: "16px",
          lineHeight: "1.5",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginLeft: "1%",
          marginTop: "0px",
        }}
      />
      <button
        style={{
          height: "40px",
          width: "98%",
          marginLeft: "1%",
          marginBottom: "1%",
        }}
        onClick={handleSubmit}
      >
        SEND PROPOSAL
      </button>
      {message && <p>
        {message}
        <a href={`${process.env.NEXT_PUBLIC_BLOXPLORER}tx/${txHash}`}>
          {txHash}
        </a>
      </p>}
    </div>
  );
};


export default CreateProposal;
