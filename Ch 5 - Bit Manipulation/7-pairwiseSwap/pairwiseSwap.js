/*
Write a program to swap odd and even bits in an integer with as few instructions as
possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).
*/

// I - a number
// O - a new number with swapped inary digits
// C - Linear | Constant
// E - N/A

// create two masks at first and second bit
// if input & mask1 is same as input & mask2 => increment masks by 2
// else, ^= input with masks (this will flip bits)

var pairwiseSwap = function (num) {
  if (num === 0) return 1;
  if (num === 1) return 2;

  let mask1 = 1;
  let mask2 = 2;
  let numCopy = num;

  while (mask1 <= numCopy) {
    if (((num & mask1) && !(num & mask2)) || (!(num & mask1) && (num & mask2))) {
      num ^= mask1;
      num ^= mask2;
    }
    mask1 <<= 2;
    mask2 <<= 2;
  }

  return num;
};

const flipOddEvenBits = function(num) {
  let oddBit = 1;
  let evenBit = 1 << 1;
  let mask = 0;

  while (oddBit < num) {
    let firstValue = num & oddBit;
    let secondValue = num & evenBit;

    firstValue <<= 1;
    secondValue >>= 1;

    mask += firstValue + secondValue;
    oddBit <<= 2;
    evenBit <<= 2;
  }

  return mask;
}

module.exports = pairwiseSwap;
