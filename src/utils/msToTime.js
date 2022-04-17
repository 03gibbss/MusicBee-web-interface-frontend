export default function msToTime(duration, format) {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  switch (format) {
    case "hmsm":
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    case "hms":
      return `${hours}:${minutes}:${seconds}`;
    case "ms":
    default:
      return `${minutes}:${seconds}`;
  }
}
