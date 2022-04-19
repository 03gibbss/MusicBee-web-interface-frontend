import React from "react";

import styles from "./TrackInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function TrackInfo({
  track,
  handlePlay,
  trackPlaying,
  isPlaying,
}) {
  const trackIsPlaying = isPlaying && trackPlaying === track.Position;
  return (
    <tr
      className={styles.row}
      style={
        trackIsPlaying
          ? { backgroundColor: "#dbdbdb" }
          : { backgroundColor: false }
      }
      onClick={() => handlePlay(track.Position)}
    >
      <td className={styles.position}>
        {trackIsPlaying ? <FontAwesomeIcon icon={faPlay} /> : track.Position}
      </td>
      <td className={styles.artist}>{track.Artist}</td>
      <td>{track.Title}</td>
    </tr>
  );
}
