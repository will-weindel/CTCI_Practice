const transformToPeaksAndValleys = require('./peaksvalleys.js');

test('Transform Works', () => {
  expect(transformToPeaksAndValleys([5, 3, 1, 2, 3]).toString).toBe([5, 1, 3, 2, 3].toString);
})