/*
Design an algorithm and write code to find the first common ancestor
of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
necessarily a binary search tree.
*/

var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinaryTree.prototype.isAncestor = function (node2) {
  //you can write this one too
};

// I - two nodes
// O - a node (possibly null)
// C - Time O(n) | Space O(1)
// E - single node (same node), nodes from different trees?

// get length of first path
// get length of second path
// move pointer to correct starting position
// move both pointer until equal

// DS - no addt. DS (Space is O(1))
// AP - for and while loops
// TR - move pointer to correct starting node

var firstCommonAncestor = function (node1, node2) {
  const nodeOnePathLength = getPathLength(node1);
  const nodeTwoPathLength = getPathLength(node2);
  const difference = Math.abs(nodeOnePathLength - nodeTwoPathLength);
  let nodeWithGreaterPath = nodeOnePathLength >= nodeTwoPathLength ? node1 : node2;
  let nodeWithShorterPath = nodeOnePathLength >= nodeTwoPathLength ? node2 : node1;

  nodeWithGreaterPath = traverseNodePath(nodeWithGreaterPath, difference);

  while (nodeWithShorterPath) {
    if (nodeWithShorterPath === nodeWithGreaterPath) {
      return nodeWithShorterPath.value;
    }
    nodeWithShorterPath = nodeWithShorterPath.parent;
    nodeWithGreaterPath = nodeWithGreaterPath.parent;
  }
  return null;
};

const getPathLength = function(node) {
  let count = 0;
  let parentNode = node.parent;
  while (parentNode) {
    count++;
    parentNode = parentNode.parent;
  }
  return count;
}

const traverseNodePath = function(node, length) {
  for (let i = 1; i <= length; i++) {
    node = node.parent;
  }
  return node;
}

module.exports = firstCommonAncestor;
