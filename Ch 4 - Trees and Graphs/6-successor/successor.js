//Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent

var BSTp = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

// I - node of a BST
// O - successor node
// C - Time O(logN) | Space O(1) | min max
// E - non-node value

// DS - bst | node
// AP - iterative (while loop)
// TR - n/a

var findSuccessor = function (node) {
  let currentnode = node.right;
  while (currentnode) {
    if (!currentnode.left) {
      return currentnode;
    }
    currentnode = currentnode.left
  }

  let parent = node.parent;
  currentnode = node;

  while (parent) {
    if (parent.right !== currentnode) {
      return parent;
    }
    currentnode = parent;
    parent = parent.parent;
  }
  return null;
};

module.exports = findSuccessor;
