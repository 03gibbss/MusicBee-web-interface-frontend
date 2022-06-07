import "./App.css";
import { SocketContext, socket } from "./context/socket";
import SocketWrapper from "./components/SocketWrapper";
import Player from "./components/Player";
import Playlists from "./components/Playlists";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <SocketWrapper>
        <Playlists />
        <Player />
      </SocketWrapper>
    </SocketContext.Provider>
  );
}

export default App;
