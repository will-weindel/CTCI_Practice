const walkingUpStairs = require('./stairs');

test('checks correct number of path output (1 - 5 stairs)', () => {
  expect(walkingUpStairs(1)).toBe(1);
  expect(walkingUpStairs(2)).toBe(2);
  expect(walkingUpStairs(3)).toBe(4);
  expect(walkingUpStairs(4)).toBe(7);
  expect(walkingUpStairs(5)).toBe(13);
});
