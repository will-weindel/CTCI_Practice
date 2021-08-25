const getSubsets = require('./subsets');

test('check if all subsets output correct number', () => {
  expect(getSubsets([1])).toBe(2);
  expect(getSubsets([1, 2])).toBe(4);
  expect(getSubsets([1, 2, 3])).toBe(8);
  expect(getSubsets([1, 2, 3, 4])).toBe(16);
  expect(getSubsets([1, 2, 3, 4, 5])).toBe(32);
})