import React from "react";
import styles from "../styles/Switch.module.css";

export const Switch = ({ value, onChange, label }) => {
  return (
    <div className={styles.switchWrapper}>
      <div className={styles.switch}>
        <input type="checkbox" id="toggle" value={value} onChange={onChange} />
        <label htmlFor="toggle"></label>
      </div>
      <span className={styles.labelText}>{label}</span>
    </div>
  );
};
