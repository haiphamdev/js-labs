
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
