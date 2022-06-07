import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

export default function SocketWrapper({ children }) {
  const socket = useContext(SocketContext);

  const [connected, setConnected] = useState(null);

  const handleConnect = useCallback(() => {
    setConnected(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    setConnected(false);
  }, []);

  useEffect(() => {
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.on("connect", handleConnect);
      socket.on("disconnect", handleDisconnect);
    };
  }, [socket, handleConnect, handleDisconnect]);

  if (connected) return children;

  if (!connected) return <div>Lost connection to server</div>;
}
