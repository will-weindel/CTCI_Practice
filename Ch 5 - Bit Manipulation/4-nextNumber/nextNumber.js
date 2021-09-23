/*
Given a positive integer, print the next smallest and the next largest number that
have the same number of 1 bits in their binary representation.
*/

// I - a number
// O - next biggest and next smallest number with same binary digits
// C - N/A
// E - N/A

// for the next greatest number, flip a 0 to 1 (this adds) and a 1 to 0 (this subtracts)
// for the smaller number, do the same as above (only the goal it flip a larger 1 and smaller 0)
// sometimes the 1s need to be synched up

module.exports = nextNumber;
