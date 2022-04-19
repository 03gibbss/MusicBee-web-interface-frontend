import React from "react";

import styles from "./PlaylistList.module.css";

export default function PlaylistList({
  playlists,
  setSelectedPlaylist,
  playlistPlaying,
}) {
  return (
    <table className={styles.table}>
      <tbody>
        {playlists.map((playlist, index) => {
          const isPlaying = playlistPlaying === index;
          return (
            <tr
              className={styles.row}
              style={
                isPlaying
                  ? { backgroundColor: "#dbdbdb" }
                  : { backgroundColor: false }
              }
              key={playlist.url}
              onClick={() => setSelectedPlaylist(index)}
            >
              <td>{playlist.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
