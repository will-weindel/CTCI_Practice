//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

//I - string
//O - sring (compressed or not)
//C - Upper and lower
//E - empty

//D - no letters, one letter
//D - use Array for 'StringBuilder'
//A - for loop
//T - n/a

//loop through string, keep track of 'current' letter
  //if new letter is same as current, add one to counts
  //if new letter is not same, add letter/count to array and reset to 0
//check length of compressed string, return shorter string

function stringCompression(str) {
  let currentLetter = '';
  let compressedString = [];
  let letterCount = 1;

  if (str.length === 0 || str.length === 1) return str;

  for (var letter of str) {
    if (!currentLetter) {
      currentLetter = letter;
      continue;
    }
    if (letter === currentLetter) {
      letterCount++;
    } else {
      compressedString.push(currentLetter, String(letterCount));
      currentLetter = letter;
      letterCount = 1;
    }
  }
  compressedString.push(currentLetter, String(letterCount));
  return compressedString.join('').length < str.length ? compressedString.join('') : str;
}

module.exports = stringCompression;
