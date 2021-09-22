/*
You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to
find the length of the longest sequence of ls you could create.
EXAMPLE
Input: 1775 (or: 11011101111)
Output: 8
*/

// I - a number
// O - longest series of 1's if a bridge is included
// C - Time O(n) | Space O(1)
// E - only 1's

// check current num against 1 (i.e. num & 1)
// if yes, increment second group, shift num right by 1
// if no, update pointers
// return maxCount or length of toString(2)

var flipBitToWin = function (number) {

};

module.exports = flipBitToWin;
