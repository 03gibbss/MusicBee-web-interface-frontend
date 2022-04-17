import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

export default function PlayerTrackInfo() {
  const socket = useContext(SocketContext);

  const [nowPlayingTrack, setNowPlayingTrack] = useState({
    artist: null,
    title: null,
    album: null,
    year: null,
    path: null,
  });

  const handleInit = useCallback(({ nowplayingtrack }) => {
    setNowPlayingTrack(nowplayingtrack);
  }, []);

  const handleNowPlayingTrack = useCallback((state) => {
    setNowPlayingTrack(state);
  }, []);

  useEffect(() => {
    socket.on("init", handleInit);
    socket.on("nowplayingtrack", handleNowPlayingTrack);

    return () => {
      socket.off("init", handleInit);
      socket.off("nowplayingtrack", handleNowPlayingTrack);
    };
  }, [socket, handleInit, handleNowPlayingTrack]);

  return (
    <div>
      {nowPlayingTrack.title} - {nowPlayingTrack.artist}
    </div>
  );
}
