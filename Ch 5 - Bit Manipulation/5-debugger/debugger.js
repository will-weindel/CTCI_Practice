/*
Explain what the following code does: ( ( n & ( n-1)) == 0).
*/

// in order for n & m to equal 0, both ints must not share any 1's or 0's in sequence
// starting at 1 and incrementing (2, 3, 4, etc...) you notice the only numbers that
// return true are powers of 2 (i.e. 1, 2, 4, 8, 16 etc...). This is because these are
// the only values were all ones are flipped:
// 8 = 1000 | 7 = 111  8 & 7 = 0;
// subtracting 1 in binary basically flips all rightmost zeros to 1, then flips the first 1 to 0

// basically this code determines if n is a power of two

var mysteriousFunction = function (n) {
  return (n & (n - 1)) === 0;
};

module.exports = mysteriousFunction;
