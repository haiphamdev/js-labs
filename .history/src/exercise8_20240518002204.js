// Viết hàm function removeVowel(str) để tìm và remove tất cả nguyên âm có trong câu văn đầu vào.
// Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)
// Ví dụ:
// removeVowel('') --> ''
// removeVowel('say hello') --> 'sy hll' vì a, e, o là nguyên âm nên đã bị xoá

function removeVowel(str) {
  // your code here
  if (str === '') return '';

  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}

console.log(removeVowel(''));
console.log(removeVowel('say helloo'));

function removeVowel1(str) {
  // your code here
  if (str.length === 0) return '';

  const vowelStr = 'ueoai';
  let result = str;

  for (let i = 0; i < str.length; i++) {
    if (vowelStr.includes(str[i])) {
      result = result.replace(str[i], '');
    }
  }

  return result;
}

console.log(removeVowel1(''));
console.log(removeVowel1('say hello'));
