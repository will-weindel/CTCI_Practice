// You are given two numbers respresented by a linked list, where each node contains a single digit,. the digits are stored in reverse order, such t hat the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer).

// Follow up suppose the digits are store din forward order. Repeat the same problem. To test go to the sumLists.test.js file and uncomment out the last test.

/*
Example:
ll1 = 7 -> 1 -> 6
ll2 = 5 -> 9 -> 2
617 + 295 = 912
output = 2 -> 1 -> 9

Follow up example:
ll1 = 6 -> 1 -> 7
ll2 = 2 -> 9 -> 5
617 + 295 = 912
output = 9 -> 1 -> 2
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

// I - two LLs
// O - new LL which 'sums' in the inputs
// C - all numbers
// E/DQs - null vals, only one LL passed, non-numerics, non LL

// (c) Create (2) pointers, 1 -> LL1 head, 2 -> LL2 head
// (c) Create Sum var, factor var
// (c) Loop through lists consecutively, adding values
  // update sum
  // update pointers
  // update factor
// (c) stringify sum, split, and reverse
// loop through sum array, create node for each element
// return new array

// DS - creation of new LL
// AP - while loop, for loop
// TR - reverse an array


function Node(val) {
  this.val = val;
  this.next = null;
}

const sumLists = (list1, list2) => {
  let currentNodeL1 = list1;
  let currentNodeL2 = list2;
  let sum = 0;
  let factor = 1;

  while (currentNodeL1 || currentNodeL2) {
    if (currentNodeL1) {
      sum += currentNodeL1.val * factor;
      currentNodeL1 = currentNodeL1.next;
    }
    if (currentNodeL2) {
      sum += currentNodeL2.val * factor;
      currentNodeL2 = currentNodeL2.next;
    }
    factor *= 10;
  }

  let sumArray = String(sum).split('').reverse();
  let newHead = new Node(Number(sumArray[0]));
  let previousNode = newHead;

  for (var i = 1; i < sumArray.length; i++) {
    previousNode.next = new Node(Number(sumArray[i]));
    previousNode = previousNode.next;
  }

  return newHead;
};

// Follow up
const sumLists2 = (list1, list2) => {
  // Your code here
}

module.exports = { sumLists, sumLists2 };
