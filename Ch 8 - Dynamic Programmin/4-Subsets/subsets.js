// I - an array
// O - a list of all subsets
// C - Time O(2^n) | Space O(2^n)
// E - n/a

// general idea is to use memoizing.
// memoizing works by taking the values of the smaller subset and adding one new value to them
// i.e. [] -> [], [1], -> [], [1], [2], [1, 2]
// basically you are taking what is already there, add a new value to all items, then
  // adding both groups back together

  const getSubsets = function(set) {
    let currentSubsetCache = [[], [set[0]]];

    for (let i = 1; i < set.length; i++) {
      let nextSubsetCache = [];
      for (let subset of currentSubsetCache) {
        let newSubset = subset.slice(0);
        newSubset.push(set[i]);
        nextSubsetCache.push(subset, newSubset);
      }
      currentSubsetCache = nextSubsetCache;
    }
    return currentSubsetCache;
  }