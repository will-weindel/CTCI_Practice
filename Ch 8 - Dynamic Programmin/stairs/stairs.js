// I - n representing a number of stairs
// O - n representing the number of paths to top
// C - Time O(n) using memo | Time O(2^n) w/o memo | Space O(C + Hs)
// E - no broken stairs, at least one stair

// use memoize strategy | cache path values
// recurse top-down

// DS - hashmap (obj) as cache
// AP - top down recursion
// TR - n/a

// this is a top-down recursive approach (each value depends on a sub-derived value)
// this approach caches an initial value (it could cache more)
// the return statement uses a check to avoid null/NaN error

const walkingDownStairs = function(n) {
  const stairPaths = { 0: 1 };

  const stepDown = function(n) {
    if (!stairPaths[n - 1]) {
      stairPaths[n - 1] = stepDown(n - 1);
    };
    return (stairPaths[n - 1] ? stairPaths[n - 1] : 0) +
           (stairPaths[n - 2] ? stairPaths[n - 2] : 0) +
           (stairPaths[n - 3] ? stairPaths[n - 3] : 0);
  }

  return stepDown(n);
}

// this approach uses a bottom up iterative approach
// it adds all cached values first, then returns the final results based on cache
// it could be optimized more by only storing the final three values.

const walkingUpStairs = function(n) {
  const stairPaths = { 0: 1 };

  for (let i = 1; i <= n; i++) {
      stairPaths[i] = (stairPaths[i - 1] || 0) +
                      (stairPaths[i - 2] || 0) +
                      (stairPaths[i - 3] || 0);
  }

  return stairPaths[n];
}

module.exports = {
  walkingUpStairs,
  walkingDownStairs
}