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