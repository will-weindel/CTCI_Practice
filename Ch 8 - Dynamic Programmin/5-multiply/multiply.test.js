const multiplyWithoutMultiply = require('./multiply');

test('multiply works', () => {
  expect(multiplyWithoutMultiply(5, 6)).toBe(30);
  expect(multiplyWithoutMultiply(6, 7)).toBe(42);
  expect(multiplyWithoutMultiply(7, 8)).toBe(56);
  expect(multiplyWithoutMultiply(8, 9)).toBe(72);
});