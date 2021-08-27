const permutationsOfAString = require('./permWOdup');

test('test Permutations', () => {
  expect(JSON.stringify(permutationsOfAString('ab')))
    .toBe(JSON.stringify(['', 'a', 'b', 'ba', 'ab']));
})