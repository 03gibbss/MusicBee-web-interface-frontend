import { createContext } from "react";
import io from "socket.io-client";

const IO_URL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:3002"
    : `ws://${window.location.host}`;

export const socket = io.connect(IO_URL);
export const SocketContext = createContext();
