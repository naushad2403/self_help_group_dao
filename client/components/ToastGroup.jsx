import React from "react";
import Toast from "./Toast";
import styles from "./../styles/Toast.module.css";

export const ToastGroup = ({ toasts, onClose }) => {
  return (
    <div className={styles.toastWrapper}>
      {toasts.map((item, index) => (
        <Toast {...item} key={index} onClose={onClose} />
      ))}
    </div>
  );
};
