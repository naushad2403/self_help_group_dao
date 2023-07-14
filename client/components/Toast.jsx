import React, { useEffect } from "react";
import styles from "./../styles/Toast.module.css";

function Toast({ title, onClose, duration = 20000, body, id }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose({ id }), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(body);
  };

  return (
    <div className={styles.toast}>
      <button className={styles.closeButton} onClick={() => onClose({ id })}>
        X
      </button>
      <div className={styles.toastBody}>
        <span className={styles.toastTitle}>{title}</span>
        <a
          className={styles.toastAnchor}
          target="_blank"
          href={`https://etherscan.io/tx/${body}`}
          rel="noreferrer"
        >
          {" "}
          {body}
        </a>
      </div>
    </div>
  );
}

export default Toast;
