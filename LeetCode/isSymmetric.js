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