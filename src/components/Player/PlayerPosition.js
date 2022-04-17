import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

import ProgressBar from "../ProgressBar";
import PlayerTimes from "./PlayerTimes";

import styles from "./PlayerPosition.module.css";

export default function PlayerPosition({ playerState }) {
  const socket = useContext(SocketContext);

  const [nowPlayingPosition, setNowPlayingPosition] = useState({
    current: null,
    total: null,
  });

  const handleInit = useCallback(({ nowplayingposition }) => {
    setNowPlayingPosition(nowplayingposition);
  }, []);

  const handleNowPlayingPosition = useCallback((state) => {
    setNowPlayingPosition(state);
  }, []);

  useEffect(() => {
    socket.on("init", handleInit);
    socket.on("nowplayingposition", handleNowPlayingPosition);
    const interval = setInterval(() => {
      if (playerState === "Playing") {
        let temp = nowPlayingPosition.current + 100;
        setNowPlayingPosition({
          current: temp,
          total: nowPlayingPosition.total,
        });
      }
    }, 100);

    return () => {
      socket.off("init", handleInit);
      socket.off("nowplayingposition", handleNowPlayingPosition);
      clearInterval(interval);
    };
  }, [
    socket,
    handleInit,
    handleNowPlayingPosition,
    nowPlayingPosition,
    playerState,
  ]);

  return (
    <div className={styles.container}>
      <PlayerTimes
        current={nowPlayingPosition.current}
        total={nowPlayingPosition.total}
      />
      <ProgressBar
        current={nowPlayingPosition.current}
        total={nowPlayingPosition.total}
      />
    </div>
  );
}
