// I - two integers
// O - product of both integers
// C - can not use *, Time O(2LogN) | Space O(LogN)
// E - num is 0, num is 1, num is neg, num is not num

// double a base-2 value until value is greater than first input
  // while doubling, cache base-2 value and doubled value of second input (after first use)
// once base-2 value is greater than first input, loop backwards through cache,
  //add cache vals to accum., subtract base vals from original num
// return accum.