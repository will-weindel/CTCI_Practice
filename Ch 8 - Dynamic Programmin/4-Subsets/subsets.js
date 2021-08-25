// I - an array
// O - a list of all subsets
// C - Time O(2^n) | Space O(2^n)
// E - n/a

// general idea is to use memoizing.
// memoizing works by taking the values of the smaller subset and adding one new value to them
// i.e. [] -> [], [1], -> [], [1], [2], [1, 2]
// basically you are taking what is already there, add a new value to all items, then
  // adding both groups back together