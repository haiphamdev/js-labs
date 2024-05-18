// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây.
// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.
// Ví dụ:
// formatSeconds(0) --> '00'
// formatSeconds(9) --> '09'
// formatSeconds(20) --> '20'

// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds > 59) return '';

  if (seconds < 10) return `0${seconds}`;

  return seconds.toString();
}

console.log(formatSecondsV1(0));
console.log(formatSecondsV1(9));
console.log(formatSecondsV1(20));
