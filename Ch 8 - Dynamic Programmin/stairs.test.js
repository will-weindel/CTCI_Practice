const { walkingUpStairs }= require('./stairs');
const { walkingDownStairs } = require('./stairs');

test('checks correct number of path output (1 - 5 stairs)', () => {
  expect(walkingUpStairs(1)).toBe(1);
  expect(walkingUpStairs(2)).toBe(2);
  expect(walkingUpStairs(3)).toBe(4);
  expect(walkingUpStairs(4)).toBe(7);
  expect(walkingUpStairs(5)).toBe(13);
});

test('checks correct number of path output (1 - 5 stairs)', () => {
  expect(walkingDownStairs(1)).toBe(1);
  expect(walkingDownStairs(2)).toBe(2);
  expect(walkingDownStairs(3)).toBe(4);
  expect(walkingDownStairs(4)).toBe(7);
  expect(walkingDownStairs(5)).toBe(13);
});
