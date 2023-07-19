import React, { useState, useEffect } from "react";
import styles from "./../styles/Timer.module.css";

const Timer = ({ seconds, timesUpCb }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      timesUpCb(countdown);
    }
  }, [countdown, timesUpCb]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className={styles.countdown}>{formatTime(countdown)}</div>
    </div>
  );
};

export default Timer;
