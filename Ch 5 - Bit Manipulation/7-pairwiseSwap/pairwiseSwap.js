/*
Write a program to swap odd and even bits in an integer with as few instructions as
possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).
*/

// I - a number
// O - a new number with swapped inary digits
// C - Linear | Constant
// E - N/A
var pairwiseSwap = function (num) {
  let mask1 = 1;
  let mask2 = 2;
  let numCopy = num;

  while (mask1 < numCopy) {
    if (((num & mask1) && !(num & mask2)) || (!(num & mask1) && (num & mask2))) {
      num ^= mask1;
      num ^= mask2;
    }
    mask1 <<= 2;
    mask2 <<= 2;
  }

  return num;
};

module.exports = pairwiseSwap;
