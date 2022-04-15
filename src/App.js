import "./App.css";
import { SocketContext, socket } from "./context/socket";
import Player from "./components/Player";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Player />
    </SocketContext.Provider>
  );
}

export default App;
