const mergeTwoArrays = require('./sortMerge.js');

test('Function Sorts Array', () => {
  expect(mergeTwoArrays([1, 2, 3, 4], [5, 6, 7, 8]).toString())
    .toBe([1, 2, 3, 4, 5, 6, 7, 8].toString());
});