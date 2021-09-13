const groupAllAnagrams = require ('./groupAnagram.js');

test('Test Anagram Solution', () => {
  expect(groupAllAnagrams(['abcd', 'got', 'dcba', 'tog']).toString())
    .toBe("abcd,dcba,got,tog");
});