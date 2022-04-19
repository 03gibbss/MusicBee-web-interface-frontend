import React from "react";

import styles from "./PlaylistControls.module.css";

export default function UpdatePlaylists({ handleRequestPlaylistUpdate }) {
  const handleConfirm = () => {
    if (
      window.confirm(
        "Warning: Updating playlists will stop playback. Do you wish to proceed?"
      )
    )
      handleRequestPlaylistUpdate();
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Playlists</div>
      <button className={styles.button} onClick={handleConfirm}>
        Update playlists
      </button>
    </div>
  );
}
