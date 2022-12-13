function capitalize(s) {
  return s.slice(0, 1).toUpperCase().concat(s.slice(1));
}

function reverseString(s) {
  let reversed = '';
  for (let i = s.length; i > 0; i--) {
    reversed += s[i - 1];
  }
  return reversed;
}

export { capitalize, reverseString };
