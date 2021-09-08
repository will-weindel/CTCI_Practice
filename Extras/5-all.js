const stepUpStairs = function(n) {
  const stairCache = { 0: 1 };

  const recurseSUS = function(n) {
    if (n < 0) return 0;
    if (n === 0) return stairCache[0];

    if (!stairCache[n]) stairCache[n] = recurseSUS(n - 1) + recurseSUS(n - 2) + recurseSUS(n - 3);

    return stairCache[n];
  }

  recurseSUS(n);
  return stairCache[n];
}