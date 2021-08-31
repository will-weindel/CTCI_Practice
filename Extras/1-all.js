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

  return letterCache.length <= string.length ? letterCache.join('') : string;
}

const rotateMatrix = function(matrix) {
  let rotatedRowsCache = {};
  let rotatedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    rotatedRowsCache[col] = [];
    for (let row = matrix.length - 1; row >= 0; row--) {
      rotatedRowsCache[col].push(matrix[row][col]);
    }
  }

  for (let row = 0; row < matrix[0].length; row++) {
    rotatedMatrix.push([]);
    rotatedRowsCache[row].forEach(element => {
      rotatedMatrix[row].push(element);
    })
  }

  return rotatedMatrix;
}

const rotateMatrix2 = function(matrix) {
  let rotatedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    rotatedMatrix.push([]);
    for (let row = matrix.length - 1; row >= 0; row--) {
      rotatedMatrix[col].push(matrix[row][col]);
    }
  }

  return rotatedMatrix;
}

const rotateMatrix3 = function(matrix) {
  for (let row = 0; row < Math.floor(matrix.length / 2); row++) {
    for (let col = row; col < matrix[0].length - 1 - row; col++) {
      rotateFourPlaces(row, col, matrix.length - 1, matrix);
    }
  }
  return matrix;
}

const rotateFourPlaces = function(row, col, length, matrix) {
  let top = matrix[row][col];
  let right = matrix[col][length - row];
  let bottom = matrix[length - row][length - col];
  let left = matrix[length - col][row];

  matrix[row][col] = left;
  matrix[col][length - row] = top;
  matrix[length - row][length - col] = right;
  matrix[length - col][row] = bottom;

  return;
}

const zeroOutRowsCols = function(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][col] = 'x';
        break;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 'x') {
        zeroOutXMarker(row, col, matrix);
        break;
      }
    }
  }
  return matrix;
}

const zeroOutXMarker = function(row, col, matrix) {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
  return;
}

const isStringRotation = function(str1, str2) {
  let letterCache = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in letterCache) letterCache[str1[i]]++;
    else letterCache[str1[i]] = 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!letterCache[str2[j]]) return false;
    else {
      letterCache[str2[j]]--;
      if (!letterCache[str2[j]]) delete letterCache[str2[j]];
    }
  }

  for (let key in letterCache) {
    if (letterCache[key]) return false;
  }

  return true;
}