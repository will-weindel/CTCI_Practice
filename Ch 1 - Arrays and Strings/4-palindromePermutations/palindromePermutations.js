//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

//I - str
//O - bool
//C - data structures?
//E - many spaces? blank? not str?

//D - object storage
//A - loop through string?
//T - sort str?

// function palindromePermutations(str) {
//   const sortedStr = str.toLowerCase().split('').sort().join('').trim();
//   let oddCount = 0;

//   for (var i = 0; i < sortedStr.length; i++) {
//     if (sortedStr[i] === sortedStr[i + 1]) {
//       i++;
//     } else {
//       oddCount++;
//       if (sortedStr.length % 2 === 0) {
//         return false;
//       } else if (oddCount > 1) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function palindromePermutations(str) {
  const letterStorage = {};
  let letterCount = 0;

  for (var letter of str.toLowerCase()) {
    if (letter !== ' ') {
      letterCount++;
      if (!letterStorage[letter]) {
        letterStorage[letter] = 1;
      } else {
        delete letterStorage[letter];
      }
    }
  }

  if (letterCount % 2 !== 0 && Object.keys(letterStorage).length > 1) return false;
  if (letterCount % 2 === 0 && Object.keys(letterStorage).length > 0) return false;
  return true;
}

module.exports = palindromePermutations;
