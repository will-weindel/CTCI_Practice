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

const isPermutation = function(str1, str2) {
  let stringCache = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in stringCache) {
      stringCache[str1[i]]++;
    } else {
      stringCache[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in stringCache) {
      stringCache[str2[i]]--;
    } else {
      return false;
    }
  }

  for (let key in stringCache) {
    if (stringCache[key]) return false;
  }

  return true;
}

const urlify = function(string) {
  let stringBuilder = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      stringBuilder.push('%20');
    } else {
      stringBuilder.push(string[i]);
    }
  }

  return stringBuilder.join('');
}

const urlify = function(str) {
  return str.split(' ').join('%20');
}