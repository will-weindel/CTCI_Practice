class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  addNewEdge(node) {
    this.edges.push(node);
    return;
  }
}

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

///////////////////

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

const createBST = function(array) {

  const recurseCreateBST = function(low, high) {
    if (low > high) return null;

    let midIndex = Math.floor((low + high) / 2);
    let treeNode = new BSTNode(array[midIndex]);

    treeNode.left = recurseCreateBST(low, midIndex - 1);
    treeNode.right = recurseCreateBST(midIndex + 1, high);

    return treeNode;
  }

  return recurseCreateBST(0, array.length - 1);
}

const createLinkedListOfLevels = function(node) {
  let cacheOfLL = {};
  let currentNodeQueue = [node];
  let depth = 0;

  while (currentNodeQueue.length) {
    let childrenNodeQueue = [];
    let list = new LinkedList();

    for (let node of currentNodeQueue) {
      node.left ? childrenNodeQueue.push(node.left) : null;
      node.right ? childrenNodeQueue.push(node.right) : null;
      list.addToTail(new ListNode(node));
    }

    cacheOfLL[depth] = list;
    depth++;
    currentNodeQueue = childrenNodeQueue;
  }

  return cacheOfLL;
}

const isTreeBalanced = function(node) {

  const recurseIsTreeBalanced = function(node) {
    if (!node) return 0;

    let leftDepth = recurseIsTreeBalanced(node.left);
    let rightDepth = recurseIsTreeBalanced(node.right);

    if (leftDepth === false || rightDepth === false) return false;
    if (Math.abs(leftDepth - rightDepth) >= 2) return false;

    return Math.max(leftDepth, rightDepth) + 1;
  }

  return !!recurseIsTreeBalanced(node);
}

const checkBinaryTreeIsBST = function(node) {

  const recurseCheckBT = function(node, lowerBound, upperBound) {
    if (!node) return;
    if (node.value > upperBound || node.value < lowerBound) return false;

    let leftCheck = recurseCheckBT(node.left, lowerBound, node.value);
    if (leftCheck === false) return false;

    let rightCheck = recurseCheckBT(node.right, node.value, upperBound);
    if (rightCheck === false) return false;

    return true;
  }

  return recurseCheckBT(node, -Infinity, Infinity);
}

const checkBinaryTreeIsBST = function(node) {

  const recurseCheckBT = function(node) {
    if (!node) return null;

    let leftValue = recurseCheckBT(node.left);
    if (leftValue === false || (leftValue && leftValue > node.value)) return false;

    let rightValue = recurseCheckBT(node.right);
    if (rightValue === false || (rightValue && rightValue < node.value)) return false;

    return rightValue ? rightValue : node.value;
  }

  return !!recurseCheckBT(node);
}
