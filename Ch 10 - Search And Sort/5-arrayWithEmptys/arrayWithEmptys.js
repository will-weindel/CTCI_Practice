// The general idea is to use a modified Binary Search to look through the array
// However, worst case scenary is O(n). It could be argued that for sake of clarity
// and code maintainance, a simple linear search would suffice.
// Additionally, a recurse BS will use extra space (in stack).
// An iterative approach may be

// the below code implements a recurse BS, (does not solve the problem).

const findStringIndexInSparseArray = function(array, num) {

  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor((high + low) / 2);

  const recurseFSIISA = function(low, mid, high) {
    if (low > high) return null;
    if (array[mid] === num) return mid;

    if (num < array[mid]) {
      high = mid - 1;
      mid = Math.floor((high + low) / 2);
      let leftCheck = recurseFSIISA(low, mid, high);
      if (leftCheck !== null) return leftCheck;
    }
    else {
      low = mid + 1;
      mid = Math.floor((high + low) / 2);
      let rightCheck = recurseFSIISA(low, mid, high);
      if (rightCheck !== null) return rightCheck;
    }

    return null;
  }

  return recurseFSIISA(low, mid, high);
}