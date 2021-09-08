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