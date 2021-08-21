// Below is a recursive approach to finding if a binary tree is symmetric
// it checks the leftNode's left against the rightNode's right and vice versa
// ** Mis - not adding multiple ||'s to an if statement
// ** Mis - used wrong property and also '==';

var isSymmetric = function(root) {
  if (!root) return false;
  return checkNodesAreSymmetric(root.left, root.right);
};

const checkNodesAreSymmetric = function(leftNode, rightNode) {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;

  let outerCheck = checkNodesAreSymmetric(leftNode.left, rightNode.right);
  let innerCheck = checkNodesAreSymmetric(leftNode.right, rightNode.left);

  if (!outerCheck || !innerCheck) return false;
  return true;
}

//the below CheckNodes func also works for recursion

// const checkNodesAreSymmetric = function(leftNode, rightNode) {
//   if (!leftNode && !rightNode) return true;
//   if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
//   return checkNodesAreSymmetric(leftNode.left, rightNode.right) &&
//          checkNodesAreSymmetric(leftNode.right, rightNode.left);
// }

// notice the return statement uses a && to pass bool info to previous call