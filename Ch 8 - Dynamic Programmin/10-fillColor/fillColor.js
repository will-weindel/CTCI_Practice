// I - matrix, click location, new color
// O - return the original matrix (update in place)
// C - Time O(n) | Space O(1)
// E - clicked on value already is color | no matrix | matrix size 1

// use BFS to 1) change colors of nearest relevant neighbors,
// use queue to update all colors in a given area


const fillColor = function(matrix, clickLoc, newColor) {
  if (matrix[clickLoc[0]][clickLoc[1]] === newColor) return matrix;

  const queue = [clickLoc];
  const currentColor = matrix[clickLoc[0]][clickLoc[1]];
  matrix[clickLoc[0]][clickLoc[1]] = newColor;

  while (queue.length) {
    let currentLocation = queue.shift();
    let row = currentLocation[0];
    let col = currentLocation[1];
    colorCheckAndChange(row - 1, col, matrix, queue, newColor, currentColor);
    colorCheckAndChange(row + 1, col, matrix, queue, newColor, currentColor);
    colorCheckAndChange(row, col - 1, matrix, queue, newColor, currentColor);
    colorCheckAndChange(row, col + 1, matrix, queue, newColor, currentColor);
  }

  return matrix;
}

const colorCheckAndChange = function(row, col, matrix, queue, newColor, currentColor) {
  if (row < 0 || !matrix[row]) return;
  if (col < 0 || !matrix[row][col]) return;
  if (matrix[row][col] !== currentColor) return;

  queue.push([row, col]);
  matrix[row][col] = newColor;
  return;
}

//** Tests

let r = 'r';
let b = 'b';
let y = 'y';
let g = 'g';

let matrix1 = [[r, r, r, r, r, r],
               [r, b, b, b, b, r],
               [r, b, b, b, b, r],
               [r, b, b, b, b, r],
               [r, b, y, y, b, r],
               [r, r, r, r, r, r]]

let matrix2 = [[r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r]]

let matrix3 = [[r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, b, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r]]

let matrix4 = [[r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, g, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r],
               [r, r, r, r, r, r]]

console.log(fillColor(matrix1, [2, 2], 'g'));
console.log(fillColor(matrix2, [2, 2], 'g'));
console.log(fillColor(matrix3, [2, 2], 'g'));
console.log(fillColor(matrix4, [2, 2], 'g'));