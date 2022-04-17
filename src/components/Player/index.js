import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

import PlayerControls from "./PlayerControls";
import PlayerPosition from "./PlayerPosition";

import styles from "./index.module.css";

export default function Player() {
  const socket = useContext(SocketContext);

  const [playerState, setPlayerState] = useState(null);

  const handlePlayerState = useCallback((state) => {
    setPlayerState(state);
  }, []);

  const handleInit = useCallback(({ playerstate }) => {
    setPlayerState(playerstate);
  }, []);

  useEffect(() => {
    socket.on("init", handleInit);
    socket.on("playerstate", handlePlayerState);

    return () => {
      socket.off("init", handleInit);
      socket.off("playerstate", handlePlayerState);
    };
  }, [socket, handlePlayerState, handleInit]);

  return (
    <div className={styles.container}>
      <PlayerControls playerState={playerState} />
      <PlayerPosition playerState={playerState} />
    </div>
  );
}
