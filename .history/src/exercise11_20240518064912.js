// Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false.
// Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:
// https
// wss

// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0;
}

console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('https://ezfrontend.com'));
console.log(isSecureUrlV1('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV1('ws://chat.abc.com'));

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  return url.startsWith('https') || url.startsWith('wss');
}

console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));
