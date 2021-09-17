// I - an array
// O - peak valley array (done in place)
// C - Time O(n) | Space (O(1))
// E - array less that length 2

// 1. start at beginning of array
// 2. check neighbor values for greater than or less than (depends on vector)
// 3. swap values if they do not meet criteria

// input = [5, 3, 1, 2, 3] -> [5, 1, 3, 2, 3]
// transformVector = t
// i = 4
// temp =

const transformToPeaksAndValleys = function(array) {
  if (array.length <= 2) return array;

  let transformVector = array[0] <= array[1] ? true : false;

  for (let i = 0; i < array.length - 1; i++) {
    if ((transformVector && array[i] <= array[i + 1]) || (!transformVector && array[i] >= array[i + 1])) {
      transformVector = !transformVector;
    }
    else {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      transformVector = !transformVector;
    }
  }
   return array;
}

module.exports = transformToPeaksAndValleys;