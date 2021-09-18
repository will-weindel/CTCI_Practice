const transformToPeaksAndValleys = require('./peaksvalleys.js');

test('Transform Works', () => {
  expect(transformToPeaksAndValleys([5, 3, 1, 2, 3]).toString()).toBe([5, 1, 3, 2, 3].toString());
  expect(transformToPeaksAndValleys([1,2,3,4,5,6,7,8]).toString()).toBe([1,3,2,5,4,7,6,8].toString());
  expect(transformToPeaksAndValleys([5,1,4,4,5,9,7,13,3]).toString()).toBe([5,1,5,4,4,9,7,13,3].toString());
  expect(transformToPeaksAndValleys([1,1,1,1,9,10,10,10]).toString()).toBe([1,1,1,1,10,9,10,10].toString());
  expect(transformToPeaksAndValleys([5,1,4,4,4,4,5,9]).toString()).toBe([5,1,5,4,4,4,4,9].toString());
})