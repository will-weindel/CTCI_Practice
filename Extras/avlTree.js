class AVLNode {
  constructor(value){
    this.value = value;
    this.parent = null;
    this.left = null;
    this.leftCount = 0;
    this.right = null;
    this.rightCount = 0;
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
      if (value < currentNode) {
        currentNode.leftCount++;
        if (!currentNode.left) {
          currentNode.left = node;
          node.parent = currentNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        currentNode.rightCount++;
        if (!currentNode.right) {
          currentNode.right = node;
          node.parent = currentNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    let unbalancedNode = this.checkBalance(currentNode);

    if (unbalancedNode) {
      let rotationMethod = this.determineRotationMethod(unbalancedNode, currentNode);

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


  checkBalance(currentNode) {
    while (currentNode) {
      if (Math.abs(currentNode.leftCount - currentNode.rightCount) > 1) {
        return currentNode;
      } else {
        currentNode = currentNode.parent;
      }
    }
    return null;
  }

  getNewNodeBalances(node) {
    if (!node) return 0;

    let leftDepth = this.getNewNodeBalances(node.left);
    let rightDepth = this.getNewNodeBalances(node.right);

    node.leftCount = leftDepth;
    node.rightCount = rightDepth;

    return

  }


  determineRotationMethod(unbalancedNode, addedNode) {
    let childNode = null;

    if (unbalancedNode.leftCount > unbalancedNode.rightCount) {
      childNode = unbalancedNode.left;
    } else {
      childNode = unbalancedNode.right;
    }

    const recurseFindAddedNode = function(node) {
      if (!node) return null;
      if (node.left === addedNode) return true;
      if (node.right === addedNode) return true;

      let leftCheck = recurseFindAddedNode(node.left);
      if (leftCheck) return leftCheck;

      let rightCheck = recurseFindAddedNode(node.right);
      if (rightCheck) return rightCheck;

      return null;
    }

    let checkLeftSubTree = recurseFindAddedNode(childNode.left);

    if (childNode = unbalancedNode.left && checkLeftSubTree) return 1;
    if (childNode = unbalancedNode.left && !checkLeftSubTree) return 2;
    if (childNode = unbalancedNode.right && !checkLeftSubTree) return 3;
    if (childNode = unbalancedNode.right && checkLeftSubTree) return 4;
  }

  rotateRR(unbalancedNode) {

    if (unbalancedNode === this.rootNode) {
      this.rootNode = unbalancedNode.right;
    }

    let newParentNode = unbalancedNode.right;
    let tempChildNode = unbalancedNode.right.left;

    newParentNode.left = unbalancedNode;
    newParentNode.parent = unbalancedNode.parent;
    unbalancedNode.right = tempChildNode;
    unbalancedNode.parent = newParentNode;

    this.getNewNodeBalances(newParentNode);

    return null;
  }

}