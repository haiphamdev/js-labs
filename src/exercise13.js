// Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.
// Quy tắc để tạo chuỗi fullName như sau:
// firstName và lastName là optional (có thể không có)
// fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
// firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

function getFullName(firstName, lastName) {
  // your code here
  const fn = capitalize(firstName || '');
  const ln = capitalize(lastName || '');

  return `${fn} ${ln}`.trim();
}

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str.trim()[0].toUpperCase();
  const rest = str.trim().slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
console.log(getFullName('hai', 'pHAm'));
