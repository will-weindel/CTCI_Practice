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
    this.leftChildrenQuantity = 0;
    this.right = null;
    this.rightChildrenQuantity = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new BinaryNode(value);

    if (!this.root)  {
      this.root = newNode;
      return null;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode.leftChildrenQuantity++;
        if (!currentNode.left) {
          currentNode.left = newNode;
          return null;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        currentNode.rightChildrenQuantity++;
        if (!currentNode.right) {
          currentNode.right = newNode;
          return null;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return null;
  }

  find(value) {
    if (!this.root) return null;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      else if (currentNode.value > value) {
        if (!currentNode.left) return null;
        else currentNode = currentNode.left;
      }
      else {
        if (!currentNode.right) return null;
        else currentNode = currentNode.right;
      }
    }

    return null;
  }

  delete(value) {
    if (!this.root) return null;
    if (this.root.value === value) {
      let temp = this.root;
      this.root = this._rebalanceTree(this.root);
      return temp;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.left && currentNode.left.value === value) {
        let temp = currentNode.left;
        currentNode.left = this._rebalanceTree(currentNode.left);
        return temp;
      }
      else if (currentNode.right && currentNode.right.value === value) {
        let temp = currentNode.right;
        currentNode.right = this._rebalanceTree(currentNode.right);
        return temp;
      }
      else if (currentNode.value > value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return null;
  }

  _rebalanceTree(obj) {
    let sortedTreeValues = Array.isArray(obj) ? obj.sort() : this._sortTreeValues(obj, true);
    let tempBST = new BST();

    const recurseHelper = function(low, high) {
      if (low > high) return;

      const midIndex = Math.floor((high + low) / 2);

      tempBST.insert(sortedTreeValues[midIndex]);
      recurseHelper(low, midIndex - 1);
      recurseHelper(midIndex + 1, high);

      return null;
    }

    recurseHelper(0, sortedTreeValues.length - 1);
    return tempBST.root;
  }

  _sortTreeValues(node, skipBool) {
    const sortedValues = [];
    const skipValue = node.value;

    const recurseHelper = function(node) {
      if (!node) return;

      recurseHelper(node.left);
      if (skipBool && node.value !== skipValue) sortedValues.push(node.value);
      recurseHelper(node.right);

      return null;
    }

    recurseHelper(node);
    return sortedValues;
  }

  createTreeFromArray(array) {
    this.root = this._rebalanceTree(array);
    return this;
  }

  getRandomNode() {
    let currentNode = this.root;

    while (currentNode) {
      let totalNodes = currentNode.leftChildrenQuantity + currentNode.rightChildrenQuantity + 1;
      let randomNumber = Math.ceil(Math.random() * totalNodes);

      if (randomNumber === currentNode.leftChildrenQuantity + 1) return currentNode;
      if (randomNumber <= currentNode.leftChildrenQuantity) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return null;
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

const getNodeSuccessor = function(node) {
  let currentNode = node.right;

  while (currentNode) {
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }

  currentNode = node;

  while (currentNode.parent) {
    if (node.value < currentNode.parent) {
      return currentNode.parent;
    }
    currentNode = currentNode.parent;
  }

  return 'Node has no sucessor.'
}

const findDependencies = function(projects, depends) {
  let projectAdjacencyList = {};
  let projectOrder = [];
  let numberOfProjects = projects.length;

  for (let project of projects) {
    projectAdjacencyList[project] = [];
  }

  for (let depend of depends) {
    projectAdjacencyList[depend[1]].push(depend[0]);
  }

  while (numberOfProjects) {
    for (let project in projectAdjacencyList) {
      if (projectAdjacencyList[project].length === 0) {
        projectOrder.push(project);
        delete projectAdjacencyList[project];
        removeProjectFromList(project, projectAdjacencyList);
      }
    }
    numberOfProjects--;
  }

  return projectOrder;
}

const removeProjectFromList = function(project, list) {
  for (let remainingProject in list) {
    let projectIndex = list[remainingProject].indexOf(project);
    if (projectIndex > -1) {
      list[remainingProject].splice(projectIndex, 1);
    }
  }
  return;
}

const findDependencies = function(projects, depends) {
  let projectAdjacencyList = {};
  let seenProjectsCache = {};
  let rootQueue = [];
  let projectOrder = [];

  for (let project of projects) {
    projectAdjacencyList[project] = [[], false];
  }

  for (let dependecy of depends) {
    projectAdjacencyList[dependecy[0]][0].push(dependecy[1]);
    projectAdjacencyList[dependecy[1]][1] = true;
  }

  for (let project in projectAdjacencyList) {
    if (!projectAdjacencyList[project][1]) {
      rootQueue.push(project);
    }
  }

  while (rootQueue.length) {
    let nextProjectQueue = [];
    for (let project of rootQueue) {
      if (!seenProjectsCache[project]) projectOrder.push(project);
      nextProjectQueue.push(...projectAdjacencyList[project][0]);
      seenProjectsCache[project] = 1;
    }
    rootQueue = nextProjectQueue;
  }

  return projectOrder;
}

const findCommonAncestor = function(root, node1, node2) {

  const recurseFindCA = function(node) {
    if (!node) return 0;

    let leftCheck = recurseFindCA(node.left);
    let rightCheck = recurseFindCA(node.right);

    if (typeof leftCheck === 'object') return leftCheck;
    if (typeof rightCheck === 'object') return rightCheck;
    if (leftCheck + rightCheck > 1) return node;

    if (node === node1) return leftCheck + rightCheck + 1;
    if (node === node2) return leftCheck + rightCheck + 1;

    return leftCheck + rightCheck;
  }

  let commonAncestor = recurseFindCA(root);

  return typeof commonAncestor === 'object' ? commonAncestor : 'No common ancestor.';
}

const createAllInputArrays = function (rootNode) {
  let arrayCache = [];
  let currentArrayVariation = [rootNode.value];
  let initialMoves = [];
  rootNode.left ? initialMoves.push(rootNode.left) : null;
  rootNode.right ? initialMoves.push(rootNode.right) : null;

  const recurseCreateAIA = function(moves) {
    if (!moves.length) {
      arrayCache.push(currentArrayVariation.slice(0));
      return null;
    }

    for (let i = 0; i < moves.length; i++) {
      let currentMove = moves[i];
      let nextMoves = [...moves.slice(0, i).concat(moves.slice(i + 1))];

      currentMove.left ? nextMoves.push(currentMove.left) : null;
      currentMove.right ? nextMoves.push(currentMove.right) : null;

      currentArrayVariation.push(currentMove.value);
      recurseCreateAIA(nextMoves);

      currentArrayVariation.pop();
    }

    return null;
  }

  recurseCreateAIA(initialMoves)
  return arrayCache;
}

const areTreesIdentical = function(root1, root2) {
  let biggerTree = determineBiggerTree(root1, root2); //* determine bigger tree

  let smallerTree = biggerTree === root1 ? root2 : root1; //* determine smaller tree

  let possibleStartingNodes = findIdenticalNode(biggerTree, smallerTree); //* find all starting nodes in bigger tree

  while (possibleStartingNodes.length) { //* pop each node, check if subtree is ident
    let currentStartingNode = possibleStartingNodes.pop();

    if (verifyIdenticalTrees(currentStartingNode, smallerTree)) return true;
  }

  return false;
}

const determineBiggerTree = function(root1, root2) {

  const recurseCountNodes = function(node) {
    if (!node) return 0;

    let leftCount = recurseCountNodes(node.left);
    let rightCount = recurseCountNodes(node.right);

    return leftCount + rightCount + 1;
  }

  let tree1Count = recurseCountNodes(root1);
  let tree2Count = recurseCountNodes(root2);

  return tree1Count > tree2Count ? root1 : root2;
}

const findIdenticalNode = function(biggerTreeRoot, smallerTreeRoot) {
  let nodeCache = [];

  const recurseFindIdentialNodes = function(node) {
    if (!node) return;
    if (node.value === smallerTreeRoot.value) nodeCache.push(node);

    recurseFindIdentialNodes(node.left);
    recurseFindIdentialNodes(node.right);

    return null;
  }

  recurseFindIdentialNodes(biggerTreeRoot);

  return nodeCache;
}

const verifyIdenticalTrees = function(node1, node2) {
  if (!node1 && !node2) return;
  if (!node1 && node2) return false;
  if (!node2 && node1) return false;
  if (node1.value !== node2.value) return false;

  let leftCheck = verifyIdenticalTrees(node1.left, node2.left);
  let rightCheck = verifyIdenticalTrees(node1.right, node2.right);

  if (leftCheck === false || rightCheck === false) return false;

  return true;
}
