import { createContext } from "react";
import io from "socket.io-client";
// import { SOCKET_URL } from "config";

export const socket = io.connect(`ws://localhost:3005`);
export const SocketContext = createContext();
