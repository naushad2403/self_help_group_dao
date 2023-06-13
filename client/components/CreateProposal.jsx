import React, { useState } from "react";

const CreateProposal = () => {
  const [value, setValue] = useState("");

  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>Write a proposal if you want to borrow money</h3>
      <textarea
        value={value}
        onChange={handleChange}
        rows={4} // Adjust the number of rows as per your requirement
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          lineHeight: "1.5",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button style={{ height: "40px" }}>SEND PROPOSAL</button>
      <div style={{ width: "100%", height: "1px", backgroundColor: "white", marginTop: "20px" }}></div>
      <h3> ALL PROPOSALS</h3>
    </div>
  );
};

export default CreateProposal;
