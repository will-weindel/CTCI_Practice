const flipBitToWin = require('./flipBitToWin');
const flipBitToWinSol = require('./flipBitToWinSol');

test('Basic flipBitToWin test', () => {
  expect(flipBitToWin(0)).toBe(1);
  expect(flipBitToWin(1)).toBe(1);
  expect(flipBitToWin(3)).toBe(2);
  expect(flipBitToWin(1775)).toBe(8);
});
