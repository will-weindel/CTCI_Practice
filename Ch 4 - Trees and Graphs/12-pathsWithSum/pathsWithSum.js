// Given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf but it must go downwards (traveling only from parent nodes to child nodes)

/*
Definition of a BT node
var BT = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
example
           5
         /   \
        3     7
       / \   / \
      2   4 6   8
     /           \
    1             10
sum = 6
output = 2
paths = [3, 2, 1], [6]
*/

var SumArr = function (arr) {
  return arr.reduce((total, num) => total + num, 0);
};

var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.countPathsWithRoot = function (value, path) {
  //methods
};

BinaryTree.prototype.pathsWithSum = function (value) {
  //on methods
};

var pathsWithSum = function (array) {
  // find da paths
};

BinaryTree.prototype.countPathsWithRoot = function (value, path) {
  //methods
};

BinaryTree.prototype.pathsWithSum = function (value) {
  //on methods
};

module.exports = pathsWithSum;
