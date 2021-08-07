// Write a function to check if a linked list is a palindrome.

/*
Example:
ll1 = [1, 2, 3, 4, 5, 6] -> false
ll2 = [1, 2, 3, 2, 1] -> true
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

// I - head of a LL
// O - bool
// C - only LL's, any type conversion, only numbers?
// E/DQs - head = null, only one node, cycle detection

// DS - two pointers
// AP - while loop
// TR - n/a

// create two pointers, one size variable
// iterate one pointer through LL to the end (keep track of size)
// iterate both pointers towards center (n/2 times), checking if vals are the same

function Node(val) {
  this.val = val;
  this.next = null;
}

const isPalindrome = (head) => {
  let fastRunner = head;
  let slowRunner = head;
  let nodeValues = [slowRunner.val];

  while (true) {
    slowRunner = slowRunner.next;
    nodeValues.push(slowRunner.val);
    fastRunner = fastRunner.next.next;

    if (!fastRunner.next) {
      break;
    }
    if (!fastRunner.next.next) {
      slowRunner = slowRunner.next;
      break;
    }
  }

  for (let i = nodeValues.length - 1; i >= 0; i--) {
    if (slowRunner.val !== nodeValues[i]) return false;
    slowRunner = slowRunner.next;
  }
  return true;
};


module.exports = isPalindrome;
