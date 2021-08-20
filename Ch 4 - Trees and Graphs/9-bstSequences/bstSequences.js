/*
A binary search tree was created by traversing through an array from left to right
and inserting each element. Given a binary search tree with distinct elements, print all possible
arrays that could have led to this tree.
*/

var BST = require('./../util/BST');

// I - binary search tree
// O - list of arrays
// C - Time O(n2) | Space recursion
// E - n/a

// Start at root, locate all possible next moves
// add moves to storage, loop through each key, passing remaining moves
 // to next recursive turn
// when no moves remaining, add combination to holder

// DS - hashmap to hold next possible moves
// AP - recursion, for loops
// TR - n/a

var bstSequences = function (bst) {
  let nextMovesList = new Map();
  let uniqueCombo = [bst.value];
  let comboSet = [];

  findNextMoves(bst, nextMovesList);
  addMovesToCombo(nextMovesList, uniqueCombo, comboSet);
  return comboSet;
}

const findNextMoves = function(node, uniqueMoves) {
  if (node.left) uniqueMoves.set(node.left.value, node.left);
  if (node.right) uniqueMoves.set(node.right.value, node.right);
  return;
}

const addMovesToCombo = function(currentMoves, combo, set) {
  if (!currentMoves.size) {
    set.push(combo.slice(0));
    return;
  }
  for (let [value, node] of currentMoves) {
    let nextMoves = new Map(currentMoves);
    combo.push(value);
    findNextMoves(node, nextMoves);
    nextMoves.delete(value);
    addMovesToCombo(nextMoves, combo, set);
    nextMoves.set(value, node);
    combo.pop();
  }
  return;
}

module.exports = bstSequences;
