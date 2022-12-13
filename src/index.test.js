import { capitalize, reverseString, calculator } from './index.js';

// capitalize
test('capitalizes first letter of lowercase string', () => {
  expect(capitalize('george')).toBe('George');
});

// reverseString
test('reverses order of characters in a string', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});

// calculator.add
test('checks positive operands calculator.add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('checks negative operands calculator.add', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test('checks opposite sign operands calculator.add', () => {
  expect(calculator.add(-1, 2)).toBe(1);
});

// calculator.subtract
test('checks positive operands calculator.subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('checks negative operands calculator.subtract', () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

test('checks opposite sign operands calculator.subtract', () => {
  expect(calculator.subtract(-1, 2)).toBe(-3);
});

// calculator.multiply
test('checks positive operands calculator.multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('checks negative operands calculator.multiply', () => {
  expect(calculator.multiply(-2, -3)).toBe(6);
});

test('checks opposite sign operands calculator.multiply', () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

// calculator.divide
test('checks positive operands calculator.divide', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('checks negative operands calculator.divide', () => {
  expect(calculator.divide(-8, -2)).toBe(4);
});

test('checks opposite sign operands calculator.divide', () => {
  expect(calculator.divide(-8, 2)).toBe(-4);
});

test('checks division by zero on calculator.divide', () => {
  expect(calculator.divide(1, 0)).toBe(undefined);
});

test('checks fractional quotient on calculator.divide', () => {
  expect(calculator.divide(1, 4)).toBe(1 / 4);
});
