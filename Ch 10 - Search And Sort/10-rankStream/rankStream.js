// I - a stream of numbers, and a look up value
// O - a rank (sum of all numbers less than or equal to - but not including self - given lookup)
// C - Time O Log N | Space Linear
// E - N/A

// add stream of numbers to a BST
// on lookup, add all left values plus node if node is less than lookup
// if node is eqaul to look up, add all left count

class IntRankerNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.leftCount = 0;
    this.right = null;
  }
}

class IntegerRanker {
  constructor() {
    this.rootNode = null;
  }

  addInteger(value) {
    let newNode = new IntRankerNode(value);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (value <= currentNode.value) {
        currentNode.leftCount++;
        if (!currentNode.left) {
          currentNode.left = newNode;
          return null;
        } else {
          currentNode = currentNode.left;
        }
      }
      else {
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

  getIntRank(num) {
    if (num === this.rootNode.value) return this.rootNode.leftCount;

    let currentNode = this.rootNode;
    let nodeCount = 0;
    let foundInt = false;

    while (currentNode) {
      if (num < currentNode.value) {
        currentNode = currentNode.left;
      } else if (num > currentNode.value) {
        nodeCount += currentNode.leftCount + 1;
        currentNode = currentNode.right;
      } else if (num === currentNode.value) {
        nodeCount += currentNode.leftCount;
        foundInt = true;
        break;
      }
    }
    return foundInt ? nodeCount : 'Integer not found.';
  }
}

module.exports = IntegerRanker;