// I - sorted/rotated Array, value
// O - index of value
// C - Time Space Vals?
// E - empty, does not exist?

// create three pointers (p) => low, mid, high
// check which half of array contains number
// update (p)'s to new low, mid, high index

const findIndexInRotatedArray = function(array, value) {
  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor((high + low) / 2);

  while (low <= high) {
    if (array[mid] === value) return mid;

    if (array[mid] < array[high]) {
      if (value > array[mid] && value <= array[high]) {
        low = mid + 1;
        mid = Math.floor((high + low) / 2);
      } else {
        high = mid - 1;
        mid = Math.floor((high + low) / 2);
      }
    } else {
      if (value < array[mid] && value >= array[low]) {
        high = mid - 1;
        mid = Math.floor((high + low) / 2);
      } else {
        low = mid + 1;
        mid = Math.floor((high + low) / 2);
      }
    }
  }

  return 'No index found.';
}