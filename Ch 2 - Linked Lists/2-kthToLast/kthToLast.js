//Given the head of a linked list and an integer, k, return the kth to last node of the linked list. If k = 1 return the last element. If k = 0 or is out of range return null.

/*
Example:
LL = [1,2,3,4,5]
k = 3
return [3,4,5]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

//I - LL
//O - kth to last node (what to return, pointer to k node, or array of vals?) node
//C - n/a (always an end, no cycle)
//E - k is greater than length, k is 0 or less

//DQ - n/a
//DS - array of nodes? not it this case (just returning a node)
//AP - while loop
//TR - n/a

//1. get size of LL
//2. return size minus kth node

const kthToLast = (head, k) => {
  //handle edge cases
  if (k <= 0) return null;
  if (head === null) return null;

  let currentNode = head;
  let listSize = 0;
  let count = 0;

  //get size of LL
  while (currentNode) {
    listSize++;
    currentNode = currentNode.next;
  }

  if (k > listSize) return null;

  //return size minus kth node
  while (currentNode) {
    if (count === listSize - k) {
      return currentNode;
    }
    count++;
    currentNode = currentNode.next;
  }
  return null;
};

module.exports = kthToLast;
