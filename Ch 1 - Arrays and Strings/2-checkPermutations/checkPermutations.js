//Given two strings, write a method to decide if one is a permutation of the other.

//I - two strings
//O - bool
//C - check for other data types, strs of diff length
//E - spaces? empty strings

//D - hash / obj
//A/P - linear (using sucessive for loops)
//T - sort and check equal?

const checkPermutations = (str1, str2) => {
  let charStorage = {};
  for (var char of str1) {
    if (!charStorage[char]) charStorage[char] = 1;
    else charStorage[char] += 1;
  };
  for (var char of str2) {
    if (!charStorage[char]) return false;
    else charStorage[char] -= 1;
  }
  for (var key in charStorage) {
    if (charStorage[key] !== 0) return false;
  }
  return true;
};

module.exports = checkPermutations;
