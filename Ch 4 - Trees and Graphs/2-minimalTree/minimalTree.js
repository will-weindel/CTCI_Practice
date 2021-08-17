//Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// I - sorted array
// O - reference to BST root
// C - Time O(n) | O(n) | min/max array length
// E/DQs - n/a

// DS - create BST
// AP - recursion, for loop
// TR - n/a

// divide array in half, set root node to middle number
// for each half, set left and right node to middle of half
// repeat process until no remaining nodes

var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
  let middle = Math.ceil(array.length / 2) - 1;
  let binarySearchTree = new BST(array[middle]);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle + 1);

  treeify(leftArray, binarySearchTree);
  treeify(rightArray, binarySearchTree);

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
