const stepUpStairs = function(n) {
  const stairCache = { 0: 1 };

  const recurseSUS = function(n) {
    if (n < 0) return 0;
    if (n === 0) return stairCache[0];

    if (!stairCache[n]) stairCache[n] = recurseSUS(n - 1) + recurseSUS(n - 2) + recurseSUS(n - 3);

    return stairCache[n];
  }

  recurseSUS(n);
  return stairCache[n];
}

const findRobotPaths = function(matrix) {
  const nextMovesQueue = [[0, 0]];

  while (nextMovesQueue.length) {
    let location = nextMovesQueue.shift();
    let row = location[0];
    let col = location[1];
    let moveCount = matrix[row][col] === 'S' ? 1 : matrix[row][col] + 1;

    let verticalCheck = checkNextMoveIsValid(row + 1, col, matrix, nextMovesQueue, moveCount);
    let horizontalCheck = checkNextMoveIsValid(row, col + 1, matrix, nextMovesQueue, moveCount);

    if (verticalCheck || horizontalCheck) return matrix;
  }

  return 'No path found.';
}

const checkNextMoveIsValid = function(row, col, matrix, queue, moveCount) {
  if (matrix[row] === undefined) return null;
  if (matrix[row][col] === undefined) return null;
  if (matrix[row][col] === 'X') return null;
  if (matrix[row][col] === 'F') return true;

  matrix[row][col] = moveCount;
  queue.push([row, col]);
  return null;
}

const findMagicIndex = function(array) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (mid === array[mid]) return mid;
    else if (mid > array[mid]) low = mid + 1;
    else if (mid < array[mid]) high = mid - 1;
  }

  return 'No matching index/value pair.';
}

const findAllSubsets = function(string) {
  const subsetCache = [''];

  for (let letter of string) {
    addLetterToSet(letter, subsetCache);
  }

  return subsetCache;
}

const addLetterToSet = function(letter, cache) {
  let newSubsetCache = [];

  for (let i = 0; i < cache.length; i++) {
    for (let j = 0; j <= cache[i].length; j++) {
      let newSubset = cache[i].substring(0, j) + letter + cache[i].substring(j);
      newSubsetCache.push(newSubset);
    }
  }

  cache.push(...newSubsetCache);
  return null;
}

const noSymbolMultiply = function(num1, num2) {
  let groups = 1;
  let groupSize = num1;
  let binaryCache = {};


  while (groups < num2) {
    binaryCache[groups] = groupSize;
    groups <<= 1;
    groupSize <<= 1;
  }

  groups >>= 1;
  let groupCount = num2;
  let sum = 0;

  while(groupCount > 0) {
    if (groups <= groupCount) {
      sum += binaryCache[groups];
      groupCount -= groups;
    }
    groups >>= 1;
  }

  return sum;
}

const solveTowersOfHanoi = function(num) {
  const stack1 = [];
  const stack2 = [];
  const stack3 = [];

  for (let i = num; i >= 1; i--) {
    stack1.push([i]);
  }

  const recurseSTOH = function(n, giver, buffer, target) {

    if (n === 1) {
      target.push(giver.pop());
      return;
    }

    recurseSTOH(n - 1, giver, target, buffer);
    target.push(giver.pop());
    recurseSTOH(n - 1, buffer, giver, target);

  }

  recurseSTOH(num, stack1, stack2, stack3);
  return [stack1, stack2, stack3];
}

const findAllParensPermutations = function(num) {
  const permutationCache = [];
  const currentPermSet = [];

  const recurseFindAllParensPerm = function(openParens, closedParens) {
    if (openParens === 0 && closedParens === 0) {
      return permutationCache.push(currentPermSet.join(''));
    }

    if (openParens > 0) {
      currentPermSet.push('(');
      recurseFindAllParensPerm(openParens - 1, closedParens);
      currentPermSet.pop();
    }

    if (closedParens > openParens) {
      currentPermSet.push(')');
      recurseFindAllParensPerm(openParens, closedParens - 1);
      currentPermSet.pop();
    }

    return null;
  }

  recurseFindAllParensPerm(num, num);
  return permutationCache;
}