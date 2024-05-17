// Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên a, b bất kỳ.
// Trả về:
// 1 nếu a > b
// 0 nếu a = b
// -1 nếu a < b

function compareNumbers(a, b) {
  // your code here
  if (a < b) return -1;

  if (a > b) return 1;
  return 0;
}

console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));
