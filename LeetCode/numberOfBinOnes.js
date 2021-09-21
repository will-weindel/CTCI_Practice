// Write a function that takes an unsigned integer and returns the number of '1' bits
// it has (also known as the Hamming weight).

// I - a number
// O - the number of 1's in the nums binary value
// C - Time O(n) | Space O(1)
// E - not a number

// if you '&' the number with one, it will return 1 if there is a 1 in the 2^0 (1's) place
// use conditional to find 1 in 1's place, then >>= 1 to right shift the number by 1 bit, repeat

const getAmountOfBinaryOnesIn = function(num) {
  console.log(num.toString(2), num.toString(2).length);
  let sum = 0;

  while (num) {
    if (num & 1) sum++;
    num >>= 1;
  }

  return sum;
}