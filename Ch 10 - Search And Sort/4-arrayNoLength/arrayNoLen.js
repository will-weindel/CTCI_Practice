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