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

function Node(val) {
  this.val = val;
  this.next = null;
}

const isPalindrome = (head) => {
  let headPointer = head;
  let tailPointer = head;
  let listValStorage = [];

  while (tailPointer) {
    listValStorage.push(tailPointer.val);
    tailPointer = tailPointer.next;
  }

  for (let i = listValStorage.length - 1; i >= 0; i--) {
    if (listValStorage[i] !== headPointer.val) {
      return false;
    }
    headPointer = headPointer.next;
  }
  return true;
};


module.exports = isPalindrome;
