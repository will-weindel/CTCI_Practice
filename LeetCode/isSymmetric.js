// Below is a recursive approach to finding if a binary tree is symmetric
// it checks the leftNode's left against the rightNode's right and vice versa
// ** Mis - not adding multiple ||'s to an if statement
// ** Mis - used wrong property and also '==';

//this solution is preOrderTraversal, Time complexity is O(n) and space is O(1) if we ignore the stack
 // otherwise Space is O(heightOfTree)

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

//[1,2,2,3,4,4,3]

const isSymmetric = function(root) {
  if (!root) return false;
  return checkNodesAreSymmetric(root.left, root.right);
}

const checkNodesAreSymmetric = function(node1, node2) {
  let stack = [node1, node2];
  let firstNode, secondNode;

  while (firstNode || secondNode || stack.length) {
    firstNode = stack.pop();
    secondNode = stack.pop();

    if (!firstNode && !secondNode) continue;
    if (!firstNode || !secondNode || firstNode.val !== secondNode.val) return false;
    stack.push(firstNode.left, secondNode.right);
    stack.push(firstNode.right, secondNode.left);
  }
  return true;
}