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
  var sequences = [];
  var recurse = function (nodes, travelled) {
    var noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map((node) => node.value));
    }
  };
  var startTravelled = {};
  startTravelled[bst.value] = true;
  recurse([bst], startTravelled);
  return sequences;
};

module.exports = bstSequences;
