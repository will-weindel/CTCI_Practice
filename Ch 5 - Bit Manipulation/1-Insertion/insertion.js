/*
You are given two 32-bit numbers, N and M, and two bit positions, i and
j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You
can assume that the bits j through i have enough space to fit all of M. That is, if
M = 10011, you can assume that there are at least 5 bits between j and i. You would not, for
example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.
EXAMPLE
Input: N 10000000000, M = 10011, i 2, j 6
Output: N = 10001001100
*/

// I - two numbers (non-binary), i & j for range values
// O - a number that has the smaller number add to it in range
// C - Time | Space
// E - can't fit in range?

// create a 1's mask (all 1's) the length of the bigger value
// create a 1's mask the length of the smaller value, then shift i places
// strictly OR (XOR) the mask and subMask (will return ex. 111110001111)
// AND the current mask with the input number (will clear the range)
// shift the smaller number i places
// OR the smaller number and the cleared out bigger number


const insertion = (M, N, i, j) => {

  let mask = 2 ** (N.toString(2).length) - 1;
  let subMask = (2 ** (M.toString(2).length) - 1) << i;
  let shifted = M << i;

  mask = (mask ^ subMask) & N;
  return mask | shifted;

};

module.exports = insertion;
