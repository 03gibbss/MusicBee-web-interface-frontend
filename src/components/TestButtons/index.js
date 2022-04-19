import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

export default function TestButtons({ context, data }) {
  const socket = useContext(SocketContext);

  const [response, setResponse] = useState("");

  const handleClick = useCallback(() => {
    socket.emit(context, data);
  }, [socket, context, data]);

  const handleEvent = useCallback((res) => {
    console.log(res);
    setResponse(JSON.stringify(res));
  }, []);

  useEffect(() => {
    socket.on(context, handleEvent);

    return () => {
      socket.off(context, handleEvent);
    };
  }, [socket, handleEvent, context]);
  return (
    <div>
      <button onClick={handleClick}>{context}</button>
      <div>{response}</div>
    </div>
  );
}
