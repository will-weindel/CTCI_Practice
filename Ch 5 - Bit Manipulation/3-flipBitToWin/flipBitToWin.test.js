const {flipBitToWin} = require('./flipBitToWin');
const {flipBitToWinn} = require('./flipBitToWin');
const flipBitToWinSol = require('./flipBitToWinSol');

test('Basic flipBitToWin test', () => {
  expect(flipBitToWin(0)).toBe(1);
  expect(flipBitToWin(1)).toBe(1);
  expect(flipBitToWin(3)).toBe(2);
  expect(flipBitToWin(1775)).toBe(8);
});

test('Basic flipBitToWin test', () => {
  expect(flipBitToWinn(0)).toBe(1);
  expect(flipBitToWinn(1)).toBe(2);
  expect(flipBitToWinn(3)).toBe(3);
  expect(flipBitToWinn(1775)).toBe(8);
});
