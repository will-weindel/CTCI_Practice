//Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// I - bst at root
// O - parent LL (each node's value prop contains pointer to sub-LL)
// C - Time O(n) | Space O(n) | min/max nodes in bst
// E/DQs - handle null values? odd node values (like LL)

// DS parentList, subList, rootQueue, childQueue
// AP BFS
// TR n/a

var BST = require('./../util/BST');
var LinkedList = require('./../util/LinkedList');
var Queue = require('./../util/Queue');

var listOfDepths = function (bst) {
  //wow, such code
};

module.exports = listOfDepths;
