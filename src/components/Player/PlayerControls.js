import React, { useCallback, useContext } from "react";
import { SocketContext } from "../../context/socket";

import styles from "./PlayerControls.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({ playerState }) {
  const socket = useContext(SocketContext);

  const handlePause = useCallback(() => {
    socket.emit("playerpause");
  }, [socket]);

  const handlePlay = useCallback(() => {
    socket.emit("playerplay");
  }, [socket]);

  const handlePrevious = useCallback(() => {
    socket.emit("playerprevious");
  }, [socket]);

  const handleNext = useCallback(() => {
    socket.emit("playernext");
  }, [socket]);
  return (
    <>
      <button className={styles.button} onClick={handlePrevious}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      {playerState === "Playing" ? (
        <button
          className={`${styles.button} ${styles.playpause}`}
          onClick={handlePause}
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
      ) : (
        <button
          className={`${styles.button} ${styles.playpause}`}
          onClick={handlePlay}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
      <button className={styles.button} onClick={handleNext}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </>
  );
}
