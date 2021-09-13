// I - array of strings
// O - new array of anagrams
// C - all strings? Time? Space?
// E - Empty array

// loop through each item of input, add sorted version to cache
// if any sorted item exists in cache -> add item index to key/value array
// loop through cache -> build new array from indexs

const groupAllAnagrams = function(arr) {
  let anagramCache = {};
  let groupedAnagrams = [];

  for (let i = 0; i < arr.length; i++) {
    let sortedString = arr[i].split('').sort().join('');
    if (anagramCache[sortedString]) {
      anagramCache[sortedString].push(i);
    } else {
      anagramCache[sortedString] = [];
      anagramCache[sortedString].push(i);
    }
  }

  for (let anagram in anagramCache) {
    for (let index of anagramCache[anagram]) {
      groupedAnagrams.push(arr[index]);
    }
  }

  return groupedAnagrams;
}

module.exports = groupAllAnagrams;