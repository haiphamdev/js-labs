const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return '';

  const hours = `0${seconds / SECONDS_PER_HOUR}`.slice(-2);
  const minutes = `0${seconds / SECONDS_PER_MIN}`.slice(-2);
  const second = `0${seconds}`.slice(-2);

  return `${hours}:${minutes}:${second}`;
}
