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

let calculatorConstructor = () => {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b == 0) {
      return undefined;
    }
    return a / b;
  }

  return { add, subtract, multiply, divide };
};
let calculator = calculatorConstructor();

function caesarCipher(s) {
  let shifted = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < s.length; i++) {
    let letterIndex = alphabet.indexOf(s[i].toLowerCase());
    let newLetterIndex = (letterIndex + 27) % s.length;
    shifted += alphabet.charAt(newLetterIndex);
  }
  return shifted;
}

function analyzeArray(a) {
  let average =
    a.reduce((sum, n) => {
      return sum + n;
    }) / a.length;
  let min = Math.min(...a);
  let max = Math.max(...a);
  let length = a.length;

  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
