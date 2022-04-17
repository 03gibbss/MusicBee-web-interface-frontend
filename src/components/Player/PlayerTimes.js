import React, { useState, useEffect } from "react";

import { msToTime } from "../../utils";
import PlayerTrackInfo from "./PlayerTrackInfo";

import styles from "./PlayerTimes.module.css";

export default function PlayerTimes({ current, total, trackString }) {
  const [currentAsTime, setCurrentAsTime] = useState("00:00");
  const [totalAsTime, setTotalAsTime] = useState("00:00");

  useEffect(() => {
    setCurrentAsTime(msToTime(current));
  }, [current]);

  useEffect(() => {
    setTotalAsTime(msToTime(total));
  }, [total]);

  return (
    <div className={styles.container}>
      <div>{currentAsTime}</div>
      <PlayerTrackInfo />
      <div>{totalAsTime}</div>
    </div>
  );
}
