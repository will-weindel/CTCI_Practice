const groupAllAnagrams = require ('./groupAnagrms.js');

test('Test Anagram Solution', () => {
  expect(groupAllAnagrams(['abcd', 'got', 'dcba', 'tog']).toString())
    .toBe("abcd,dcba,got,tog");
});