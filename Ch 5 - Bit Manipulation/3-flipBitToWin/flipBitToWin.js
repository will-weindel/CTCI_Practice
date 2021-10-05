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

var flipBitToWin = function (num) {
  if (num === 0) return 1;

  let firstGroupCount = 0;
  let secondGroupCount = 0;
  let maxCount = 0;

  while (num >= 1) {
    if (num & 1) {
      secondGroupCount++;
      num >>= 1;
    }
    else {
      let totalCount = firstGroupCount + secondGroupCount + 1;
      maxCount = totalCount > maxCount ? totalCount : maxCount;
      firstGroupCount = secondGroupCount;
      secondGroupCount = 0;
      num >>= 1;
    }
  }

  return maxCount > 0 ? maxCount : secondGroupCount;
};

const flipBitToWin = function(num) {
  let group1Length = 0;
  let group2Length = 0;
  let maxLength = 0;

  while (num > 0) {
    if (!(num & 1)) {
      let totalLength = group1Length + group2Length + 1;
      maxLength = Math.max(totalLength, maxLength);
      group1Length = group2Length;
      group2Length = 0;
    } else {
      group2Length++;
    }
    num >>= 1;
  }

  maxLength = Math.max(group1Length + group2Length + 1, maxLength);
  return maxLength;
}

module.exports = flipBitToWin;
