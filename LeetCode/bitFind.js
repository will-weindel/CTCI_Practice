//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.

// I - an array with a unique value (all other vals have pairs)
// O - the unique number
// C - Time O(n) | Space O(1) | number range | length range | type range
// E - none number types

// there are two ways we can approach a solution (one violates a contraint on space)
// we can loop through the array, add each item to memory, and then if item exists, remove from mem
// we can also use ^= to XOR a number to some accumulator, and the net result will be the only remaining num

const findUniqueValueExtraMem = function(array) {
  const valueMap = new Map();

  for (let num of array) {
    if (valueMap.has(num)) valueMap.delete(num);
    else valueMap.set(num, 0);
  }

  for (let [key, value] of valueMap) {
   return key;
  }
}