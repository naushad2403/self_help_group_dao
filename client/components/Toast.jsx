import React, { useEffect } from "react";
import styles from "./../styles/Toast.module.css";

function Toast({ title, onClose, duration = 3000, body, id }) {
  useEffect(() => {
    // const timer = setTimeout(() => onClose({ id }), duration);
    // return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.toast}>
      <button className={styles.closeButton} onClick={() => onClose({ id })}>
        X
      </button>
      <div className={styles.toastBody}>
        <span className={styles.toastTitle}>{title}</span>
        <span className={styles.toastMessage}>{body}</span>
      </div>
    </div>
  );
}

export default Toast;
