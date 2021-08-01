//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

//I - string
//O - sring (compressed or not)
//C - Upper and lower
//E - empty

//D - no letters, one letter
//D - n/a
//A - for loop
//T - n/a

//loop through string, keep track of 'current' letter
  //if new letter is same as current, add one to counts
  //if new letter is not same, add count to string and reset to 0
//check length of compressed string, return shorter string

function stringCompression(str) {
  let currentLetter = '';
  let compressedString = '';
  let letterCount = 1;

  for (var letter of str) {
    if (!currentLetter) {
      currentLetter = letter;
      continue;
    }
    if (letter === currentLetter) {
      letterCount++;
    } else {
      compressedString = compressedString + currentLetter + String(letterCount);
      currentLetter = letter;
      letterCount = 1;
    }
  }
  compressedString = compressedString + currentLetter + String(letterCount);
  return compressedString.length < str.length ? compressedString : str;
}

module.exports = stringCompression;
