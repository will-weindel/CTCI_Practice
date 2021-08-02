//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

//I - N X N matrix
//O - rotatedMatrix (90)
//C - Disquals? Not NxN? Unique numbers
//E - no input, wrong input etc.

//Dis - N/A
//Da - N/A
//A-P - double for-loop
//T - n/a

function rotateMatrix(matrix) {
  let rotatedMatrix = [];

  for (var i = 0; i < matrix.length; i++) {
    let matrixRow = [];
    for (var j = matrix.length - 1; j >= 0; j--) {
      matrixRow.push(matrix[j][i]);
    }
    rotatedMatrix.push(matrixRow);
  }
  return rotatedMatrix;
}

module.exports = rotateMatrix;
