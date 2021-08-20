/*
Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an
algorithm to determine if T2 is a subtree of Tl.
A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree
of n is identical to T2.
That is, if you cut off the tree at node n, the two trees would be identical.
*/

var Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// I - two tree nodes
// O - bool
// C - Time O(n) | Space O(n)
// E - n/a

var isSame = function (tree1, tree2) {
  let treeOneStartingNode = recurseTreeOne(tree1, tree2);
  if (treeOneStartingNode) {
    return recurseBothTrees(treeOneStartingNode, tree2);
  } else {
    return false;
  }
};

const recurseTreeOne = function(node1, node2) {
  if (!node1) return;
  if (node1.value === node2.value) return node1;

  let leftNode = recurseTreeOne(node1.left, node2);
  let rightNode = recurseTreeOne(node1.right, node2);

  if (leftNode) return leftNode;
  if (rightNode) return rightNode;
  return null;
}

const recurseBothTrees = function(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if (node1.value !== node2.value) return false;

  let leftNodes = recurseBothTrees(node1.left, node2.left);
  let rightNodes = recurseBothTrees(node1.right, node2.right);

  if (!leftNodes) return false;
  if (!rightNodes) return false;

  return true;
}


module.exports = Tree;
