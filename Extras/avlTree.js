// General AVL Operation:
// 1. add new node to tree via BS
// 2. from new node, move up tree and adjust left/right balances
// 3. from new node, look for imbalances
// 4. if imbalance, perform either LL, RR, RL or LR operation on respective nodes
// 5. from root node, regenerate left/right depths

class AVLNode {
  constructor(value){
    this.value = value;
    this.parent = null;
    this.left = null;
    this.leftDepth = 0;
    this.right = null;
    this.rightDepth = 0;
  }
}

class AVLTree {
  constructor() {
    this.rootNode = null;
  }

  addNode(value) {
    let node = new AVLNode(value);

    if (!this.rootNode) {
      this.rootNode = node;
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          node.parent = currentNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          node.parent = currentNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    let leafNode = currentNode.left === node ? currentNode.left : currentNode.right;

    this.adjustNodeBalances(leafNode);

    let unbalancedNode = this.checkBalance(leafNode);

    if (unbalancedNode) {
      let rotationMethod = this.determineRotationMethod(unbalancedNode, leafNode);

      switch (rotationMethod) {
        case 1:
          this.rotateLL(unbalancedNode);
          break;
        case 2:
          this.rotateLR(unbalancedNode);
          break;
        case 3:
          this.rotateRR(unbalancedNode);
          break;
        case 4:
          this.rotateRL(unbalancedNode);
          break;
        default: break;
      }
    }
  }

  adjustNodeBalances(node) {
    let parentNode = node.parent;
    let childNode = node;

    while (parentNode) {
      if (parentNode.left === childNode) {
        parentNode.leftDepth = Math.max(childNode.leftDepth, childNode.rightDepth) + 1;
      } else {
        parentNode.rightDepth = Math.max(childNode.leftDepth, childNode.rightDepth) + 1;
      }
      childNode = parentNode;
      parentNode = parentNode.parent;
    }

    return null;
  }

  checkBalance(currentNode) {
    while (currentNode) {
      if (Math.abs(currentNode.leftDepth - currentNode.rightDepth) > 1) {
        return currentNode;
      } else {
        currentNode = currentNode.parent;
      }
    }
    return null;
  }

  getNewNodeBalances(node) {
    if (!node) return 0;
    node.leftDepth = this.getNewNodeBalances(node.left);
    node.rightDepth = this.getNewNodeBalances(node.right);
    return Math.max(node.leftDepth, node.rightDepth) + 1;
  }


  determineRotationMethod(unbalancedNode, addedNode) {
    let unBNode = unbalancedNode;
    let childNode = unBNode.leftDepth > unBNode.rightDepth ? unBNode.left : unBNode.right;

    const recurseFindAddedNode = function(node) {
      if (!node) return null;
      if (node === addedNode) return true;

      let leftCheck = recurseFindAddedNode(node.left);
      if (leftCheck) return leftCheck;

      let rightCheck = recurseFindAddedNode(node.right);
      if (rightCheck) return rightCheck;

      return null;
    }

    let checkLeftSubTree = recurseFindAddedNode(childNode.left);

    if (childNode === unbalancedNode.left && checkLeftSubTree) return 1;
    if (childNode === unbalancedNode.left && !checkLeftSubTree) return 2;
    if (childNode === unbalancedNode.right && !checkLeftSubTree) return 3;
    if (childNode === unbalancedNode.right && checkLeftSubTree) return 4;
  }

  rotateRR(unbalancedNode) {

    if (unbalancedNode === this.rootNode) {
      this.rootNode = unbalancedNode.right;
    }

    let grandParentNode = unbalancedNode;
    let parentNode = unbalancedNode.right;
    let tempLeftNode = parentNode.left;

    parentNode.left = grandParentNode;
    parentNode.parent = grandParentNode.parent;

    grandParentNode.parent = parentNode;
    grandParentNode.right = tempLeftNode;

    if (tempLeftNode) tempLeftNode.parent = grandParentNode;
    if (parentNode.parent) parentNode.parent.right = parentNode;

    this.getNewNodeBalances(this.rootNode);
    return null;
  }

  rotateLL(unbalancedNode) {

    if (unbalancedNode === this.rootNode) {
      this.rootNode = unbalancedNode.left;
    }

    let grandParentNode = unbalancedNode;
    let parentNode = unbalancedNode.left;
    let tempRightNode = parentNode.right;

    parentNode.right = grandParentNode;
    parentNode.parent = grandParentNode.parent;

    grandParentNode.parent = parentNode;
    grandParentNode.left = tempRightNode;

    if (tempRightNode) tempRightNode.parent = grandParentNode;
    if (parentNode.parent) parentNode.parent.left = parentNode;

    this.getNewNodeBalances(this.rootNode);
    return null;
  }

  rotateLR(unbalancedNode) {

    if (unbalancedNode === this.rootNode) {
      this.rootNode = unbalancedNode.left.right;
    }

    let grandParentNode = unbalancedNode;
    let parentNode = unbalancedNode.left;
    let childNode = unbalancedNode.left.right;
    let tempLeftNode = childNode.left;
    let tempRightNode = childNode.right;

    childNode.left = parentNode;
    childNode.right = grandParentNode;
    childNode.parent = grandParentNode.parent;

    parentNode.parent = childNode;
    grandParentNode.parent = childNode;

    parentNode.right = tempLeftNode;
    grandParentNode.left = tempRightNode;

    if (tempLeftNode) tempLeftNode.parent = parentNode;
    if (tempRightNode) tempRightNode.parent = grandParentNode;
    if (childNode.parent) childNode.parent.left = childNode;

    this.getNewNodeBalances(this.rootNode);
    return null;
  }

  rotateRL(unbalancedNode) {

    if (unbalancedNode === this.rootNode) {
      this.rootNode = unbalancedNode.right.left;
    }

    let grandParentNode = unbalancedNode;
    let parentNode = unbalancedNode.right;
    let childNode = unbalancedNode.right.left;
    let tempLeftNode = childNode.left;
    let tempRightNode = childNode.right;

    childNode.right = parentNode;
    childNode.left = grandParentNode;
    childNode.parent = grandParentNode.parent;

    parentNode.parent = childNode;
    grandParentNode.parent = childNode;

    parentNode.left = tempRightNode;
    grandParentNode.right = tempLeftNode;

    if (tempLeftNode) tempLeftNode.parent = parentNode;
    if (tempRightNode) tempRightNode.parent = grandParentNode;
    if (childNode.parent) childNode.parent.right = childNode;

    this.getNewNodeBalances(this.rootNode);
    return null;
  }

}