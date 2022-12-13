import { capitalize } from './index.js';

test('capitalizes first letter of lowercase string', () => {
  expect(capitalize('george')).toBe('George');
});
