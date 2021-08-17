//Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// I - sorted array
// O - reference to BST root
// C - Time O(n) | O(n) | min/max array length
// E/DQs - n/a

// DS - create BST
// AP - recursion, for loop
// TR - n/a

var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
  let middle = Math.ceil(array.length / 2) - 1;
  let binarySearchTree = new BST(array[middle]);

  treeify(array.slice(0, middle), binarySearchTree);
  treeify(array.slice(middle + 1), binarySearchTree);

  return binarySearchTree;

};

function treeify(array, tree) {
  if (!array.length) return null;
  if (array.length === 1) return tree.insert(array[0]);

  let middle = Math.ceil(array.length / 2) - 1;
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle + 1);

  tree.insert(array[middle]);
  treeify(leftArray, tree);
  treeify(rightArray, tree);

  return tree;
}

module.exports = insertBalanced;
