//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

//I - two strings
//O - bool
//C - single words, spaces (trimming), check for data types
//E - none

//Ds - strings greater than 1 diff in length
//Da - n/a
//Al - recursion
//T - n/a

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  if (str1 === str2) return true;

  let longestString = str1.length >= str2.length ? str1 : str2;
  let shortestString = str1.length >= str2.length ? str2 : str1;

  for (var i = 0; i < longestString.length; i++) {
    if (longestString[i] !== shortestString[i]) {
      if (modifyString(longestString, shortestString, longestString[i], i)) return true;
      return false;
    }
  }
}

function modifyString(str1, str2, letter, i) {
  let modifiedString;
  //insert
  modifiedString = str2.substring(0, i) + letter + str2.substring(i, str2.length);
  if(checkRemainingString(str1, modifiedString, i)) return true;
  //change
  modifiedString = str2.substring(0, i) + letter + str2.substring(i + 1, str2.length);
  if(checkRemainingString(str1, modifiedString, i)) return true;
  return false;
}

function checkRemainingString(str1, str2, i) {
  for (var j = i; j < str1.length; j++) {
    if (str1[j] !== str2[j]) return false;
  }
  return true;
}

module.exports = oneAway;
