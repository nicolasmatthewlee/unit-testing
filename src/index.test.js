import { capitalize, reverseString } from './index.js';

test('capitalizes first letter of lowercase string', () => {
  expect(capitalize('george')).toBe('George');
});

test('reverses order of characters in a string', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});
