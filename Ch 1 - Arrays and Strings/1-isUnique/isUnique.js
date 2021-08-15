//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// I - string (non sorted, does not exist in external data structure)
// O - boolean
// C - Time O(nLogn) | Space O(1) | str. length
// E - char case, unique values, spaces, non char values

// DS - we could use hash, also possible to solve w/o
// AP - double for loop | single for loop + hashmap | sort first, then for loop
// TR - sort the str

// sort the str
// loop through each value in str (if neighbor is same value, return false)
// return true

// create hashmap
// loop through each value in str
  // add each value to hashmap (if value already exists, return false)

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
