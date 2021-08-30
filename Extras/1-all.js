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

const isPermutation2 = function(str1, str2) {
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

const urlify2 = function(str) {
  return str.split(' ').join('%20');
}

const isPalindromePerm = function(string) {
  let oddCount = 0;

  string = [...string].sort().join('').trim();

  for (let i = 0; i < string.length; i += 2) {
    if (string[i] === string[i + 1]) continue;
    else if (oddCount < 1) {
      i--;
      oddCount++;
      continue;
    }
    else return false;
  }
  return true;
}

const isPalindromePerm2 = function(string) {
  let letterCache = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;
    if (string[i] in letterCache) {
      delete letterCache[string[i]];
    } else {
      letterCache[string[i]] = 1;
    }
  }

  if (Object.keys(letterCache).length > 1) return false;

  return true;
}

const oneAway = function(str1, str2) {
  const longString = str1.length >= str2.length ? str1 : str2;
  const shortString = longString === str1 ? str2 : str1;

  let longIndex = 0;
  let shortIndex = 0;
  let lengthDiff = longString.length - shortString.length;
  let changeCount = 0;

  for (let i = 0; i < longString.length; i++) {
    if (longString[longIndex] === shortString[shortIndex]) {
      longIndex++;
      shortIndex++;
      continue;
    }
    else {
      changeCount++;
      if (changeCount > 1) return false;
      longIndex++;
      lengthDiff ? null : shortIndex++;
    }
  }
  return true;
}

const stringCompressor = function(string) {
  let letterCache = [];
  let currentLetter = string[0];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === currentLetter) {
      count++
    } else {
      letterCache.push(currentLetter, count);
      currentLetter = string[i];
      count = 1;
    }
  }

  letterCache.push(currentLetter, count);
  let compressedString = letterCache.join('');

  return string.length >= compressedString.length ? compressedString : string;
}