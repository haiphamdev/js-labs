const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return '';

  const hours = `0${Math.trunc(seconds / SECONDS_PER_HOUR)}`.slice(-2);
  const minutes = `0${Math.trunc((seconds / SECONDS_PER_MIN) % 60)}`.slice(-2);
  const second = `0${Math.trunc(seconds % 60)}`.slice(-2);

  return `${hours}:${minutes}:${second}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));

console.log(9 / 3600);
console.log(9 / 60);
