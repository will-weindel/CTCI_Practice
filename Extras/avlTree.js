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

}