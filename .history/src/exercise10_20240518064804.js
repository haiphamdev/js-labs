// Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false.
// Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:
// https
// wss

// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0;
}

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  return url.startsWith('https') || url.startsWith('wss');
}
