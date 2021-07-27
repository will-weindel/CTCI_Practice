//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//I - a string
//O - boolean
//C - greater than 26 letters? (only if single word)
//E - spaces? empty strings?
//D - HashTable or object with key
//A/P - double for loop
//T - sort and check neighbor?

function isUnique(str) {
  let count = 1;
  for (var char of str) {
    for (var i = count; i < str.length; i++) {
      if (str[i] === char) return false;
    }
    count++
  }
  return true;
}

module.exports = isUnique;
