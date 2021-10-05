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
  let flipCount = 0;
  let largerValue = num1 >= num2 ? num1 : num2;
  let smallerValue = num1 >= num2 ? num2 : num1;

  while (largerValue > 0) {
    if ((largerValue & 1) && !(smallerValue & 1)) flipCount++;
    if (!(largerValue & 1) && (smallerValue & 1)) flipCount++;
    largerValue >>= 1;
    smallerValue >>= 1;
  }

  return flipCount;
};

const getNumberOfFlips = function(num1, num2) {
  let numberOfChanges = Math.abs(num1.toString(2).length - num2.toString(2).length);
  let mask = 1;

  while (mask < num2) {
    let currentBitValue = num2 & mask;
    if ((num1 & mask) !== currentBitValue) numberOfChanges++;
    mask <<= 1;
  }

  return numberOfChanges;
}

module.exports = conversion;
