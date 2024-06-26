// Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)
// Ví dụ:
// getMaxDigit(1) --> 1
// getMaxDigit(12) --> 2
// getMaxDigit(123) --> 3
// getMaxDigit(921) --> 9
// Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1

function getMaxDigit(n) {
  // your code here
  if (n < 0 || n.toString().length > 3) return -1;

  let max = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  if (tens > max) max = tens;
  if (hundreds > max) max = hundreds;

  return max;
}

console.log(getMaxDigit(1000));
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(912));

function getMaxDigit1(n) {
  // your code here
  if (n < 0 || n.toString().length > 3) return -1;

  const newStr = n.toString().split('');

  let max = Number.NEGATIVE_INFINITY;
  for (const i in newStr) {
    if (newStr[i] > max) max = newStr[i];
  }

  return Number(max);
}

console.log(getMaxDigit1(1000));
console.log(getMaxDigit1(1));
console.log(getMaxDigit1(12));
console.log(getMaxDigit1(123));
console.log(getMaxDigit1(912));
