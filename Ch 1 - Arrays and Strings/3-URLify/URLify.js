//Write a method to replace all spaces in a string with '%20'.

//I - string
//O - modified string with %20
//C - do we need to check for data types? non URLs?
//E - none

//D - string
//A/P - for loop / loop through string, create new string
//T - N/A

var URLify = (str) => {
  let modifiedURL = '';
  for (var letter of str) {
    if (letter !== ' ') {
      modifiedURL += letter;
    } else {
      modifiedURL += '%20';
    }
  }
  return modifiedURL;
};

module.exports = URLify;
