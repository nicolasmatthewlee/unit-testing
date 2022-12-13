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

export { capitalize, reverseString, calculator };
