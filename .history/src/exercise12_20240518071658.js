function findSecret(code) {
  // your code here
  if (code.length === 0) return '';

  let result = '';

  for (let i = 0; i < code.length; i++) {
    if (!code[i].includes(code[i].toUpperCase())) result += code[i];
  }

  return result;
}

console.log(findSecret('SUPERCODEa'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));
