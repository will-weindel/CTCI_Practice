/*
You are implementing a binary tree class from scratch which, in addition to
insert, find, and delete, has a method getRandomNode() which returns a random node
from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm
for getRandomNode, and explain how you would implement the rest of the methods.
*/

//implements BinaryTree factory function
//implements BinaryNode factory function
//adds insert, delete, getrandom and _getLastNodeValue

//recreate to use BST and O log(n) randomness


var BinaryNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

var BinaryTree = function (value = null) {
  this.rootNode = !!value ? new BinaryNode(value) : null;
  this.treeSize = !!this.rootNode ? 1 : 0;
};


BinaryTree.prototype.insert = function(value) {
  if (!this.rootNode) {
    this.rootNode = new BinaryNode(value);
    this.treeSize++;
    return;
  }

  let nodeQueue = [];
  let currentNode = this.rootNode;

  while (currentNode) {
    if (!currentNode.left) {
      this.treeSize++;
      currentNode.left = new BinaryNode(value);
      currentNode.left.parent = currentNode;
      return;
    }
    if (!currentNode.right) {
      this.treeSize++;
      currentNode.right = new BinaryNode(value);
      currentNode.right.parent = currentNode;
      return;
    }
    nodeQueue.push(currentNode.left, currentNode.right);
    currentNode = nodeQueue.shift();
  }
  return null;
}

BinaryTree.prototype.delete = function(value) {
  if (!this.rootNode) return null;

  let currentNode = this.rootNode;
  let nodeQueue = [];

  while (currentNode) {
    if (currentNode.left) nodeQueue.push(currentNode.left);
    if (currentNode.right) nodeQueue.push(currentNode.right);
    if (currentNode.value === value) {
      let tempNode = currentNode;
      currentNode.value = this._getLastNodeValue(nodeQueue);
      this.treeSize--;
      return tempNode;
    }
    currentNode = nodeQueue.shift();
  }
  return null;
}

BinaryTree.prototype._getLastNodeValue = function(queue) {
  if (!queue[0]) return null;

  let currentNode = queue.shift();

  while (currentNode) {
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    if (!queue.length) {
      let value = currentNode.value;
      currentNode = currentNode.parent;
      if (currentNode.left.value === value) currentNode.left = null;
      if (currentNode.right.value === value) currentNode.right = null;
      return value;
    }
    currentNode = queue.shift();
  }
  return null;
}

BinaryTree.prototype.getRandomNode = function() {
  if (!this.rootNode) return null;
  if (this.treeSize === 1) return this.rootNode;

  let nodeNumber = Math.ceil(Math.random() * this.treeSize);
  let nodeQueue = [];
  let count = 1;
  let currentNode = this.rootNode;

  while (currentNode) {
    if (count === nodeNumber) {
      return currentNode;
    }
    count++;
    if (currentNode.left) nodeQueue.push(currentNode.left);
    if (currentNode.right) nodeQueue.push(currentNode.right);
    currentNode = nodeQueue.shift();
  }
  return null;
}

module.exports = BinaryTree;
