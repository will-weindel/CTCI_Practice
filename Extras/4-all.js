const findPathBtwnNodes = function(node1, node2) {
  let node1ConnectionsCache = new Map();
  let node2ConnectionsCache = new Map();

  let node1BFSQueue = [node1];
  let node2BFSQueue = [node2];

  while (node1BFSQueue.length || node2BFSQueue.length) {

    if (node1BFSQueue.length) {
      let currentNode = node1BFSQueue.shift();
      if (node2ConnectionsCache.has(currentNode)) {
        return true;
      }
      if (!node1ConnectionsCache.has(currentNode)) {
        node1ConnectionsCache.set(currentNode, true)
        for (let node of currentNode.edges) {
          node1BFSQueue.push(node);
        }
      }
    }

    if (node2BFSQueue.length) {
      let currentNode = node2BFSQueue.shift();
      if (node1ConnectionsCache.has(currentNode)) {
        return true;
      }
      if (!node2ConnectionsCache.has(currentNode)) {
        node2ConnectionsCache.set(currentNode, true)
        for (let node of currentNode.edges) {
          node2BFSQueue.push(node);
        }
      }
    }
  }

  return false;
}

const createBST = function(array) {
  if (!array.length) return null;

  let middleIndex = Math.floor(array.length / 2);
  let middleValue = array[middleIndex];
  let treeNode = new BSTNode(middleValue);

  treeNode.left = createBST(array.slice(0, middleIndex));
  treeNode.right = createBST(array.slice(middleIndex + 1));

  return treeNode;
}