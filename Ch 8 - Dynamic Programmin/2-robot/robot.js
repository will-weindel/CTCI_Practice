// I - 2d matrix
// O - new matrix
// C - Time O(n) | Space O(2LengthDiag);
// E - can not reach

// create a copy of the input
// create a queue (for each new space)
// loop through queue (until empty)
  // for each position 1) add new positions to queue, mark space on copy of input

// DS - queue, matrix
// AP - iteration (while), memoizing with matrix

// below solution also adds unique dist numbs to each matrix position.
// this will help draw a path back to the start

const findRobotPaths = function(input) {
  let matrix = input.slice(0);
  let positionQueue = [[0,0]];

  while (positionQueue.length) {
    let current = positionQueue.shift(); // could use a LL for optimization
    let row = current[0];
    let col = current[1];
    let currentValue = (matrix[row][col] !== 's') ? matrix[row][col] : 0;
    addNewPosition(row + 1, col, matrix, positionQueue, currentValue);
    addNewPosition(row, col + 1, matrix, positionQueue, currentValue);
  }
  return matrix;
}

const addNewPosition = function(row, col, matrix, queue, value) {
  if (!matrix[row]) return;
  if (matrix[row][col] !== 0) return;
  matrix[row][col] = value + 1;
  queue.push([row, col])
  return;
}