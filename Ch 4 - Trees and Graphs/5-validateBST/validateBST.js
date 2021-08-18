//Implement a function to check if a binary tree is a binary search tree.

var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// I - Binary Tree
// O - boolean based on bstness
// C - Time O(n) | Space O(n) | min max tree size, min max vals, repeats?
// E - single bt, non bt

// DS - n/a
// AP - recursion
// TR - n/a

var validateBST = function (bt) {
  let leftWithinRange = valueWithinRange(bt.left, -Infinity, bt.value);
  let rightWithinRange = valueWithinRange(bt.right, bt.value, Infinity);
  if (!leftWithinRange || !rightWithinRange) return false;
  return true;
};

var valueWithinRange = function (bt, lowerLimit, upperLimit) {
  if (!bt) return true;
  if (bt.value > upperLimit) return false;
  if (bt.value < lowerLimit) return false;

  let leftWithinRange = valueWithinRange(bt.left, lowerLimit, bt.value);
  let rightWithinRange = valueWithinRange(bt.right, bt.value, upperLimit);

  if (!leftWithinRange || !rightWithinRange) return false;
  return true;
}

module.exports = validateBST;
