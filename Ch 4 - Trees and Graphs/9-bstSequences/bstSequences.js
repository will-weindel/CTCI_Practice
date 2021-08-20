/*
A binary search tree was created by traversing through an array from left to right
and inserting each element. Given a binary search tree with distinct elements, print all possible
arrays that could have led to this tree.
*/

var BST = require('./../util/BST');

var bstSequences = function (bst) {
  if (!bst.right && !bst.left) return 1;
  let parentQueue = [bst];
  let sum = 0;
  while (parentQueue.length) {
    let childQueue = [];
    for (var node of parentQueue) {
      if (node.right) childQueue.push(node.right);
      if (node.left) childQueue.push(node.left);
    }
    sum += findFactorial(childQueue.length);
    parentQueue = childQueue;
  }
  return sum;
};

const findFactorial = function(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num * findFactorial(num - 1);
}

module.exports = bstSequences;
