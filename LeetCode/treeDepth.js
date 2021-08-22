var maxDepth = function(root) {
  if (!root) return null;
  if (!root.left && !root.right) return 1;

  let maximumDepth = 0;
  let stack = [];
  let currentNode = root;

  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
      if (stack.length > maximumDepth) maximumDepth = stack.length;
    } else {
      currentNode = stack.pop()
      currentNode = currentNode.right;
    }
  }
  return maximumDepth;
};