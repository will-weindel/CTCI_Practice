// I - n representing a number of stairs
// O - n representing the number of paths to top
// C - Time O(n) using memo | Time O(2^n) w/o memo | Space O(C + Hs)
// E - no broken stairs, at least one stair

// use memoize strategy | cache path values
// recurse top-down

// DS - hashmap (obj) as cache
// AP - top down recursion
// TR - n/a

// this approach caches an initial value (it could cache more)
// the return statement uses a check to avoid null/NaN error

const walkingUpStairs = function(n) {
  const stairPaths = {
    0: 1
  };

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