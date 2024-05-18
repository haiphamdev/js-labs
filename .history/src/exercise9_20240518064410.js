// Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)
// Trả về là một chuỗi với định dạng hh:mm:ss trong đó:
// hh là số giờ
// mm là số phút
// ss là số giây
// hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return '';

  const hours = `0${Math.trunc(seconds / SECONDS_PER_HOUR)}`.slice(-2);
  const minutes = `0${Math.trunc((seconds / SECONDS_PER_MIN) % 60)}`.slice(-2);
  const second = `0${seconds}`.slice(-2);

  return `${hours}:${minutes}:${second}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));

console.log(9 / 3600);
console.log(9 / 60);
