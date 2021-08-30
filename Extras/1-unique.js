const isUnique = function(string) {
  string = string.split('').sort().join('');
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      return false;
    }
  }
  return true;
}

const isUnique2 = function(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false;
    }
  }
  return true;
}

const isPermutation = function(str1, str2) {
  str1 = str1.split('').sort().join();
  str2 = [...str2].sort().join();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}