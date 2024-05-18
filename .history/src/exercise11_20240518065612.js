// Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @
// Ví dụ:
// extractDomain('')  --> ''
// extractDomain('alice@gmail.com')  --> 'gmail.com'
// extractDomain('bob@abc.com') --> 'abc.com'

// using split
function extractDomainV1(email) {
  // your code here
  if (email.length === 0) return '';

  const arr = email.split('@');

  return arr[arr.length - 1];
}

console.log(extractDomainV1(''));
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));
