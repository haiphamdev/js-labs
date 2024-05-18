function findSecret(code) {
  // your code here
  if (code.length === 0) return '';

  const newCode = code;
  let result = '';

  for (let i = 0; i < code.length; i++) {
    if (!newCode.includes(code[i].toUpperCase())) result += code[i];
  }

  return result;
}
