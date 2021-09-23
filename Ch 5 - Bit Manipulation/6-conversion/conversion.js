/*
Write a function to determine the number of bits you would need to flip to convert
integer A to integer B.
EXAMPLE
Input: 29 (or: 11101), 15 (or: 01111)
Output: 2
*/

// I - two ints
// O - the number of bit flips needed to convert one into two
// C - Time O(n) where n = binary length of larger input | Space O(1)
// E - non ints

// check each int against 1 (i.e. num1 & 1 | num2 & 1)
// if they are the same, shift both right by one
// if they are different, increment counter and then shift both right by one


var conversion = function (number1, number2) {
  //convert
};

module.exports = conversion;
