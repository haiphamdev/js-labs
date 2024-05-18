function capitalize(str) {
  if (str.length === 0) return '';

  const firstLetter = str.trim()[0].toUpperCase();
  const rest = str.trim().slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(capitalize('  hAi  '));
