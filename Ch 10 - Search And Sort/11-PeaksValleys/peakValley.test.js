const transformToPeaksAndValleys = require('./peaksvalleys.js');

test('Transform Works', () => {
  expect(transformToPeaksAndValleys([5, 3, 1, 2, 3]).toString).toBe([5, 1, 3, 2, 3].toString);
  expect(transformToPeaksAndValleys([1,2,3,4,5,6,7,8]).toString).toBe([1,3,2,5,4,7,6,8].toString);
})