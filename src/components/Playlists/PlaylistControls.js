import React from "react";

import styles from "./PlaylistControls.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function PlaylistControls({
  playlist,
  selectedPlaylist,
  clearSelectedPlaylist,
  handlePlay,
  playlistPlaying,
}) {
  const isPlaying = selectedPlaylist === playlistPlaying;
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={clearSelectedPlaylist}>
        Back
      </button>
      <div className={styles.header}>{playlist.name}</div>
      {isPlaying ? (
        <FontAwesomeIcon className={styles.volume} icon={faVolumeHigh} />
      ) : (
        <button className={styles.play} onClick={() => handlePlay(1)}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
    </div>
  );
}
