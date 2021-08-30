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