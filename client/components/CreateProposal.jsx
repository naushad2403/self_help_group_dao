import React, { useState } from "react";
import styles from "../styles/CreateProposal.module.css";
import { shg_abi } from "../util";
import { useContractWrite } from "wagmi";
import { useDispatch } from "react-redux";
import { addToast } from "../state_management/slices/toast";
import { ethers } from "ethers";

const CreateProposal = ({ address }) => {
  const [amount, setAmount] = useState();
  const [duration, setDuration] = useState();
  const [interestRate, setInterestRate] = useState();
  const [purpose, setPurpose] = useState();

  const dispatch = useDispatch();

  const proposalMethod = useContractWrite({
    address: address,
    abi: shg_abi,
    functionName: "submitLoanProposal",
    args: [
      amount ? ethers.parseEther(amount.toString()) : "0",
      purpose,
      interestRate,
      duration,
    ],
    onSuccess(data) {
      dispatch(
        addToast({ title: "Proposal Transaction sent", body: data.hash })
      );
    },

    onError(error) {
      dispatch(addToast({ title: "Error!!!", body: error?.details }));
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
    if (
      isValidInput(amount) &&
      isValidInput(duration) &&
      isValidInput(interestRate) &&
      isValidInput(purpose)
    ) {
      proposalMethod.write();
      setAmount("");
      setDuration("");
      setInterestRate("");
      setPurpose("");
    } else {
      console.log("Invalid input");
    }
  };

  const isValidInput = (value) => {
    return !isNaN(value) || value.trim() != "";
  };

  const isSubmitDisabled =
    !(amount > 0) ||
    !(duration > 0) ||
    !(interestRate > 0) ||
    !(purpose?.length > 0);

  const buttonStyle = isSubmitDisabled ? { opacity: 0.5 } : {};

  return (
    <div className={styles.container}>
      <h3>Write a proposal if you want to borrow money</h3>
      <div className={styles.inputContainer}>
        <h5>Enter amount:</h5>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <h5>Enter duration on loan:</h5>
        <input
          type="number"
          placeholder="Enter duration in month"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <h5>Enter interest rate percentage per month:</h5>
        <input
          type="number"
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
        rows={4}
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
          ...buttonStyle, // Apply the buttonStyle dynamically
        }}
        onClick={handleSubmit}
        disabled={isSubmitDisabled || proposalMethod.isLoading}
      >
        SEND PROPOSAL
      </button>
    </div>
  );
};

export default CreateProposal;
