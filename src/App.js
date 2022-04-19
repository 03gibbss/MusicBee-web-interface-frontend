import "./App.css";
import { SocketContext, socket } from "./context/socket";
import Player from "./components/Player";
import Playlists from "./components/Playlists";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Playlists />
      <Player />
    </SocketContext.Provider>
  );
}

export default App;
