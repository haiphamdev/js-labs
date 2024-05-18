function getFullName(firstName, lastName) {
  // your code here
  const fn = capitalize(firstName) || '';
  const ln = capitalize(lastName) || '';

  return `${fn} ${ln}`.trim();
}

function capitalize(str = '') {
  if (str.length === 0) return '';

  const firstLetter = str.trim()[0].toUpperCase();
  const rest = str.trim().slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(getFullName('', 'jAASJJjjjjjp'));
