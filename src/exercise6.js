// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.
// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)
// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.
// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...

function isSymmetricNumber(n) {
  // your code here
  if (n < 0 || n.toString().length > 3) return -1;

  const ones = n % 10;
  const tens = Math.trunc(n / 10);
  const hundreds = Math.trunc(n / 100);

  if (n < 10) return true;
  if (n < 100) return ones === tens;
  return ones === hundreds;
}

console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(373));
console.log(isSymmetricNumber(3738));

function isSymmetricNumber1(n) {
  // your code here
  if (n < 0 || n.toString().length > 3) return -1;

  const newStr = n.toString().split('');

  const tens = Math.trunc(n / 10);
  const hundreds = Math.trunc(n / 100);

  for (const i in newStr) {
    if (newStr[i] < 10) {
      return true;
    } else if (n < 100) {
      return newStr[i] === tens;
    } else {
      return newStr[i] === hundreds;
    }
  }
}

console.log(isSymmetricNumber1(1));
console.log(isSymmetricNumber1(22));
console.log(isSymmetricNumber1(121));
console.log(isSymmetricNumber1(373));
console.log(isSymmetricNumber1(3738));
