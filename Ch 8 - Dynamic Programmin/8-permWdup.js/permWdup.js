/* this solution is almost idential to the previous solution, expect it uses a
hashtable to store letters to avoid duplicates */


const permutationsOfAString = function(string) {
  if (!string.length) return [''];
  if (string.length === 1) return ['', string];

  let substringCache = [''];
  let letterCache = {};

  for (let i = 0; i < string.length; i++) {
    if (!letterCache[string[i]]) {
      letterCache[string[i]] = 1;
      addLetterToPermutations(string[i], substringCache)
    }
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

// TEST

console.log(permutationsOfAString('aaabbbccc'));