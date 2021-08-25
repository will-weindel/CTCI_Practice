// I - two integers
// O - product of both integers
// C - can not use *, Time O(2LogN) | Space O(LogN)
// E - num is 0, num is 1, num is neg, num is not num

// double a base-2 value until value is greater than first input
  // while doubling, cache base-2 value and doubled value of second input (after first use)
// once base-2 value is greater than first input, loop backwards through cache,
  //add cache vals to accum., subtract base vals from original num
// return accum.

const multiplyWithoutMultiply = function(n, m) {
  if (n === 0 || m === 0) return 0;
  if (n === 1) return m;
  if (m === 1) return n;

  let cache = {};
  let baseTwoPlace = 1;
  let accumulator = 0;

  while (baseTwoPlace <= n) {
    cache[baseTwoPlace] = m;
    m<<=1;
    baseTwoPlace<<=1;
  }

  while (n > 0) {
    baseTwoPlace>>=1;
    if (baseTwoPlace <= n) {
      accumulator += cache[baseTwoPlace];
      n -= baseTwoPlace;
    }
  }

  return accumulator;
}

module.exports = multiplyWithoutMultiply;