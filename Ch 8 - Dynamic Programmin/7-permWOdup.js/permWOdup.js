// I - string (unique chars)
// O - all permutations
// C - Time (extreme, worse than factorial) | Space (worse than factorial)
// E - n/a

// loop through previous set of permutations and add a new letter to each perm
// the new letter should be added before and after each letter of the previous perms
// be sure to add new perms to the end of the cache (saving the previous cache)

const permutationsOfAString = function(string) {
  if (!string.length) return [''];
  if (string.length === 1) return ['', string];

  let substringCache = [''];

  for (let i = 0; i < string.length; i++) {
    addLetterToPermutations(string[i], substringCache)
  }

  return substringCache;
}

const addLetterToPermutations = function(letter, substringCache) {
  let cacheLength = substringCache.length;

  for (let i = 0; i < cacheLength; i++) {
    for (let j = 0; j <= substringCache[i].length; j++) {
      substringCache.push(substringCache[i].substring(0, j) + letter + substringCache[i].substring(j))
    }
  }
}

module.exports = permutationsOfAString;

// TEST

// console.log(permutationsOfAString('abc'));
// console.log(permutationsOfAString('abcd'));
// console.log(permutationsOfAString('abcde'));