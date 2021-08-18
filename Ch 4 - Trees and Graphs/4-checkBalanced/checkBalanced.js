//Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// I - bst root
// O - boolean
// C - Time | Space | min height, max height
// E - n/a

// DS - n/a
// AP - recursion
// TR - n/a

// the general idea is to compare the max height of left tree to the max height of the right
// if the height of the left if greater than the height of the right, tree is unbalanced
// else it is balanced

var BST = require('./../util/BST');

var checkBalanced = function (node) {
  return checkNodeDeepness(node) === false ? false : true;
};

var checkNodeDeepness = function(node) {
  if (!node) return 0;
  let leftDeepness = checkNodeDeepness(node.left);
  let rightDeepness = checkNodeDeepness(node.right);
  let difference = Math.abs(leftDeepness - rightDeepness);
  if (difference > 1 || leftDeepness === false || rightDeepness === false) {
    return false;
  }
  return 1 + Math.max(leftDeepness, rightDeepness);
}

module.exports = checkBalanced;
