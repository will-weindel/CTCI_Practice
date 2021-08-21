/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Below solution uses recursion (non-memoized) - not sure if memoization would help here
// ** Mis: not adding correct number of parameters - be sure to update all func calls with param updates
// ** Mis: spending too much time worrying about variable names

 var inorderTraversal = function(root) {
  if (!root.left && !root.right) return [root.val];
  let inOrderStorage = [];
  traverseTree(root, inOrderStorage);
  return inOrderStorage;

};

var traverseTree = function(node, array) {
  if (!node) return;
  traverseTree(node.left, array);
  array.push(node.val);
  traverseTree(node.right, array);
  return;
};

//Below is an iterative approach to in-order traversal (normally done with recursion)
//It uses a stack (which mimics the recursive stack)
// ** Mis: I tend to avoid setting a variable to null (i.e. setting node = node.left when resulting in null)
  // you do not need to avoid this all the time (your base case or recursive case can handle it)

var inorderTraversal = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  let traversalStack = [];
  let inorderValues = [];
  let currentNode = root;

  while (currentNode || traversalStack.length) {
    if (currentNode) {
      traversalStack.push(currentNode);
      currentNode = currentNode.left;
    } else {
        currentNode = traversalStack.pop();
        inorderValues.push(currentNode.val);
        currentNode = currentNode.right;
    }
  }

  return inorderValues;
}