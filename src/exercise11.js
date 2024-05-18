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

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email.length === 0) return '';

  return email.slice(email.indexOf('@') + 1);
}

console.log(extractDomainV2(''));
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));
