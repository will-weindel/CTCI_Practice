const {insertion} = require('./insertion');
const {insertBinaryNumber} = require('./insertion');
const insertionSol = require('./insertionSol');

const N = parseInt(10000000000, 2);
const M = parseInt(10011, 2);

test('Basic insertion test', () => {
  expect(insertion(M, N, 2, 6).toString(2)).toBe('10001001100');
});

test('Basic insertion test', () => {
  expect(insertBinaryNumber(N, M, 2, 6).toString(2)).toBe('10001001100');
});
