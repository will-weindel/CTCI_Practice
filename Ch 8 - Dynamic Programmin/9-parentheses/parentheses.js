// I - num
// O - list of parens
// C - n/a
// E - n/a

// there is both an iterative approach and a recursive approach
// the interative approach can insert valid parentheses at every location from previous cache
// the recursive approach can build the string in place (no duplicates)

const parensPermutations = function(n) {
  let permutationCache = [];

  const recurseParensPerm = function(string, openParens, closedParens) {
    if (string.length === n * 2) {
      permutationCache.push(string);
      return;
    }

    if (openParens < n) recurseParensPerm(string + '(', openParens + 1, closedParens);
    if (closedParens < openParens) recurseParensPerm(string + ')', openParens, closedParens + 1);
    return;
  }

  recurseParensPerm('', 0, 0);
  return permutationCache;
}

// Tests

console.log(parensPermutations(2));
console.log(parensPermutations(3));
console.log(parensPermutations(4));