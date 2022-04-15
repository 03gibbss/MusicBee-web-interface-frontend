import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

export default function PlayerPosition() {
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

    return () => {
      socket.off("init", handleInit);
      socket.off("nowplayingposition", handleNowPlayingPosition);
    };
  }, [socket, handleInit, handleNowPlayingPosition]);

  return (
    <div>
      {nowPlayingPosition.current} / {nowPlayingPosition.total}
    </div>
  );
}
