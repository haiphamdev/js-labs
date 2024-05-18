function getFullName(firstName, lastName) {
  // your code here
  const fn = capitalize(firstName || '');
  const ln = capitalize(lastName || '');

  return `${fn} ${ln}`.trim();
}

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str.trim()[0].toUpperCase();
  const rest = str.trim().slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
console.log(getFullName('hai', 'pHAm'));
