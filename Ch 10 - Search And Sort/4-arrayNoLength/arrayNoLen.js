//I - array with no size/length property, value
//O - index of value
//C - Time O(logN) Space O(1);
//E - empty list

//* 1. handle edge cases / sanity checks
//* 2. find length of array by checking index returns against multiples of 2
//* 3. use binary search (low, mid, high) once length is found

// [1, 2, 3, 4, 5, 6, 7] -1, -1,
// low = 5
// high = 8
// mid = 6

const findIndexInModifiedArray = function(array, value) {
  if (array[0] === undefined) return null;

  let index = 1;

  while (array[index]) {
    index *= 2;
  }

  let low = 0;
  let high = index;
  let mid = Math.floor((high + low) / 2);

  while (low <= high && array[low] !== undefined) {
    if (array[mid] === value) return mid;
    else if (!array[mid]) {
      high = mid;
      mid = Math.floor((high + low) / 2);
    }
    else if (value > array[mid]) {
      low = mid + 1;
      mid = Math.floor((high + low) / 2);
    }
    else {
      high = mid - 1;
      mid = Math.floor((high + low) / 2);
    }
  }

  return 'No index found.';
}

module.exports = findIndexInModifiedArray;