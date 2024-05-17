// Viết hàm lấy giá vé tương ứng theo số tuổi
// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000 VND
// Trên 12 tuổi thì đồng giá 50.000 VND
// Giả sử người sống thọ nhất là 125 tuổi

function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age > 12) return 50000;
  return 20000;
}

console.log(getTicketPrice(126));
console.log(getTicketPrice(5));
console.log(getTicketPrice(15));
console.log(getTicketPrice(71));
