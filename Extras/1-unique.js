const isUnique = function(string) {
  string = string.split('').sort().join('');
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      return false;
    }
  }
  return true;
}