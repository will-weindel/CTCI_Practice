//Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.

//I - MxN matrix (possible 0's);
//O - modified Matrix
//C - filtering? matrix irregularies
//E - all 0's, empty?

//DQ's -
//DS's - n/a - we will work in place
//AP's - for-loop w/ helper function
//TR's - n/a

//Keep track of 0-out rows?

//loop through each element in array
  //if 0, helper function will 0-out col and row

  function zeroMatrix(matrix) {
    let numberOfRows = matrix.length - 1;
    let numberOfCols = matrix[0].length - 1;

    for (var i = 0; i <= numberOfRows; i++) {
      for (var j = 0; j <= numberOfCols; j++) {
        if (matrix[i][j] === 0) {
          zeroOutRowsAndCols(i, j, numberOfRows, numberOfCols, matrix);
        }
      }
    }

    for (var i = 0; i <= numberOfRows; i++) {
      for (var j = 0; j <= numberOfCols; j++) {
        if (matrix[i][j] === '0') matrix[i][j] = 0;
      }
    }
    return matrix;
  }

  function zeroOutRowsAndCols(row, col, numberOfRows, numberOfCols, matrix) {
    for (var i = 0; i <= numberOfCols; i++) {
      matrix[row][i] = '0';
    }
    for (var j = 0; j <= numberOfRows; j++) {
      matrix[j][col] = '0';
    }
    return;
  }

module.exports = zeroMatrix;
