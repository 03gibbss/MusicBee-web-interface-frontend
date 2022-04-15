import React, { useCallback, useContext } from "react";
import { SocketContext } from "../../context/socket";

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
      <button onClick={handlePrevious}>&lt;</button>
      {playerState === "Playing" ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
      <button onClick={handleNext}>&gt;</button>
    </>
  );
}