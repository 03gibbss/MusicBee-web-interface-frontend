import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function ProgressBar({ current, total }) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted((current / total) * 100);
  }, [current, total]);

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${completed}%` }}></div>
    </div>
  );
}
