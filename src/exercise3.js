// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.
// Yêu cầu:
// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
// Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.

function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount < 1) return 0;

  return Math.ceil(passengersCount / 7);
}

console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));

function getTaxiCount1(passengersCount) {
  // your code here
  if (passengersCount < 1) return 0;

  if (passengersCount <= 4) return `1 xe 4 cho`;

  let calcCar7 = Math.trunc(passengersCount / 7);
  let calcCar4 = passengersCount % 7;

  if (calcCar4 > 4) {
    calcCar7 += 1;
  } else if (calcCar4 >= 1) {
    calcCar4 = 1;
  }

  if (calcCar4 !== 1) return `${calcCar7} xe 7 cho`;

  return `${calcCar7} xe 7 cho va ${calcCar4} xe 4 cho`;
}

console.log(getTaxiCount1(3));
console.log(getTaxiCount1(6));
console.log(getTaxiCount1(10));
console.log(getTaxiCount1(20));
console.log(getTaxiCount1(22));
