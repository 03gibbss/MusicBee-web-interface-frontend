import React from "react";

import TrackInfo from "./TrackInfo";

import styles from "./TrackList.module.css";

export default function TrackList({
  tracks,
  handlePlay,
  trackPlaying,
  playlistPlaying,
  selectedPlaylist,
}) {
  const isPlaying = playlistPlaying === selectedPlaylist;
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          <td className={styles.position}>#</td>
          <td className={styles.artist}>Artist</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => (
          <TrackInfo
            track={track}
            key={track.Position}
            handlePlay={handlePlay}
            trackPlaying={trackPlaying}
            isPlaying={isPlaying}
          />
        ))}
      </tbody>
    </table>
  );
}
