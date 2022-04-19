import React, { useCallback, useEffect, useState, useContext } from "react";
import { SocketContext } from "../../context/socket";

import UpdatePlaylists from "./UpdatePlaylists";
import PlaylistList from "./PlaylistList";
import PlaylistControls from "./PlaylistControls";
import TrackList from "./TrackList";

import styles from "./index.module.css";

export default function Playlists() {
  const socket = useContext(SocketContext);

  const [selectedPlaylist, setSelectedPlaylist] = useState("-1");
  const [playlistPlaying, setPlaylistPlaying] = useState("-1");
  const [trackPlaying, setTrackPlaying] = useState("-1");

  const [playlists, setPlaylists] = useState([
    {
      name: "",
      url: "",
      tracks: [
        {
          artist: "",
          title: "",
          album: "",
          year: "",
          path: "",
          position: 1,
        },
      ],
    },
  ]);

  const handleRequestPlaylistUpdate = useCallback(() => {
    socket.emit("updateplaylists");
  }, [socket]);

  const handleUpdatePlaylists = useCallback((playlists) => {
    setPlaylists(playlists);
  }, []);

  const handlePlaylistPlaying = useCallback((index) => {
    setPlaylistPlaying(index);
  }, []);

  const handleTrackPlaying = useCallback((index) => {
    setTrackPlaying(index);
  }, []);

  useEffect(() => {
    socket.emit("requestplaylists");
    socket.on("updateplaylists", handleUpdatePlaylists);
    socket.on("playlistplaying", handlePlaylistPlaying);
    socket.on("trackplaying", handleTrackPlaying);

    return () => {
      socket.off("updateplaylists", handleUpdatePlaylists);
      socket.off("playlistplaying", handlePlaylistPlaying);
      socket.off("trackplaying", handleTrackPlaying);
    };
  }, [
    socket,
    handleUpdatePlaylists,
    handlePlaylistPlaying,
    handleTrackPlaying,
  ]);

  const clearSelectedPlaylist = () => {
    setSelectedPlaylist("-1");
  };

  const handlePlay = useCallback(
    (trackIndex) => {
      if (trackIndex !== 1) {
        socket.emit("playlistplaybyindex", {
          url: playlists[selectedPlaylist].url,
          index: trackIndex,
        });
      } else {
        socket.emit("playlistplaysmooth", playlists[selectedPlaylist].url);
      }
    },
    [socket, playlists, selectedPlaylist]
  );

  return (
    <div className={styles.container}>
      {selectedPlaylist === "-1" ? (
        <>
          <UpdatePlaylists
            handleRequestPlaylistUpdate={handleRequestPlaylistUpdate}
          />
          <PlaylistList
            playlists={playlists}
            setSelectedPlaylist={setSelectedPlaylist}
            playlistPlaying={playlistPlaying}
          />
        </>
      ) : (
        <>
          <PlaylistControls
            playlist={playlists[selectedPlaylist]}
            selectedPlaylist={selectedPlaylist}
            clearSelectedPlaylist={clearSelectedPlaylist}
            handlePlay={handlePlay}
            playlistPlaying={playlistPlaying}
          />
          <TrackList
            tracks={playlists[selectedPlaylist].tracks}
            handlePlay={handlePlay}
            trackPlaying={trackPlaying}
            playlistPlaying={playlistPlaying}
            selectedPlaylist={selectedPlaylist}
          />
        </>
      )}
    </div>
  );
}
