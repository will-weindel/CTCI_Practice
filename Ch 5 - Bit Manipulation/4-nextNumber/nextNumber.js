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

const flippinBits = function(num) {
  const greaterValue = getGreaterNumber(num);
  const smallerValue = getSmallerValue(num);
  return [greaterValue, smallerValue];
}

const getGreaterNumber = function(num) {
  let leftShifts = 0;
  let oneCount = 0;
  let numCopy = num;

  while (numCopy > 0) {
    if (numCopy & 1) {
      leftShifts++;
      oneCount++;
      numCopy >>= 1;
    }
    else if (oneCount === 0) {
      leftShifts++;
      numCopy >>= 1;
    }
    else break;
  }

  oneCount--;
  numCopy |= 1;
  numCopy <<= leftShifts;
  let mask = 1;

  while (oneCount > 0) {
    numCopy |= mask;
    mask <<= 1;
    oneCount--;
  }

  return numCopy;
}

const getSmallerValue = function(num) {
  let leftShifts = 0;
  let numCopy = num;
  let oneCount = 0;
  let zeroCount = 0;

  while (numCopy > 0) {
    if (numCopy & 1 && !zeroCount) oneCount++;
    else if (!(numCopy & 1))zeroCount++;
    else break;

    leftShifts++;
    numCopy >>= 1;
  }

  if (!zeroCount) return num;

  let mask = (1 << leftShifts);
  numCopy <<= leftShifts;
  numCopy ^= mask;
  mask >>= 1;
  numCopy ^= mask;

  while (oneCount) {
    mask >>= 1;
    numCopy ^= mask;
    oneCount--;
  }

  return numCopy;
}

module.exports = nextNumber;
