const findIndexInRotatedArray = require('./rotatedArray.js');

test('Find Correct Index', () => {
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12)).
    toBe(0);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 13)).
    toBe(1);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 14)).
    toBe(2);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15)).
    toBe(3);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1)).
    toBe(6);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)).
    toBe(7);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)).
    toBe(8);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)).
    toBe(9);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5)).
    toBe(10);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6)).
    toBe(11);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10)).
    toBe(15);
  expect(findIndexInRotatedArray([12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11)).
    toBe(16);
})