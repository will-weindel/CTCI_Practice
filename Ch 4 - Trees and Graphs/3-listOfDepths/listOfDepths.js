//Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// I - bst at root
// O - parent LL (each node's value prop contains pointer to sub-LL)
// C - Time O(n) | Space O(n) | min/max nodes in bst
// E/DQs - handle null values? odd node values (like LL)

// DS parentList, subList, rootQueue, childQueue
// AP BFS
// TR n/a

// create parent LL
// add root node to new LL (add this to parent)
  // add root node left/right to queue
// for each node in child queue, add to new LL
  // add child nodes to new Queue
//return if no remaining child nodes in new queue

var BST = require('./../util/BST');
var LinkedList = require('./../util/LinkedList');
var Queue = require('./../util/Queue');

var listOfDepths = function (bst) {
  let parentList = new LinkedList();
  let subList = new LinkedList();
  let rootQueue = new Queue();
  let childQueue = new Queue();
  rootQueue.enqueue(bst);

  while(!rootQueue.isEmpty()) {
    let node = rootQueue.dequeue()
    subList.append(node);
    if (node.left) {
      childQueue.enqueue(node.left);
    }
    if (node.right) {
      childQueue.enqueue(node.right);
    }
    if (rootQueue.isEmpty()) {
      parentList.append(subList);
      subList = new LinkedList();
      rootQueue = childQueue;
      childQueue = new Queue();
    }
  }

  return parentList;
};

module.exports = listOfDepths;
