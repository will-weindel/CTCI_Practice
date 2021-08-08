// Given a linked list that may contain a loop, write an algorithm to return the node at the beginning of the loop or false if there is no loop

/*
Example:
ll1 = 1 -> 2 -> 3 -> 4 -> 2 (same 2 as before)
return 2 node
return false if there is no loop
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

// I - ref to head of LL
// O - ref to loop node in LL | or false
// C - Time O(N) | Space O(1) | upper limit | lower limit
// E/DQ's - null head, only one node, can node link to itself?


function Node(val) {
  this.val = val;
  this.next = null;
}

const loopDetection = (head) => {
  let slowRunner = head;
  let fastRunner = head;

  while (fastRunner) {
    if (fastRunner.next === null || fastRunner.next.next === null) {
      return false;
    }
    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;
    if (fastRunner === slowRunner) {
      slowRunner = head;
      break;
    }
  }

  while (true) {
    if (slowRunner === fastRunner) {
      return slowRunner;
    }
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }
};


module.exports = loopDetection;
