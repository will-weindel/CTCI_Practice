// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element can appear anywhere in the "right partition" it does not have to appear between the left and the right partitions.)  The nodes within each partition do not have to be in any particular order. The space below indicates the partition point but doesn't have to be denoted in any way in the linked list.

/*
Example:
LL = [22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]
input node = 20       partition
                        VVVV
LL = [1, 1, 6, 5, 2, 17,     21, 22, 31, 20, 21]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

// I - linked list head, and partition number
// O - return pointer to head
// C - constraints (negative numbers, all numbers)
// E/DQs - all nodes outside of partition, single ll, no ll, cycle?

// DS - array (used to add pointers)
// AP - (1) while loop to sort, (1) for loop to connect nodes
// TR - n/a

// C 1. create a new 'LL' (can be an array of pointers)
// C 2. loop through each element of input LL
  // C 3. if element val is greater than partition, add to end of new LL
  // C 4. if element val is less than partition, add to beginning of new LL
// C 5. loop through each element in new LL, updating the 'next' props to neighbor
// C 6. return new head

const partition = (head, x) => {
  //edge cases
  if (head === null) return null;
  if (head.next === null) return head;
  if (typeof x !== 'number') return 'Partition value must be a number.';

  let sortedNodes = [];
  let currentNode = head;

  while (currentNode) {
    if (currentNode.val >= x) {
      sortedNodes.push(currentNode);
    } else {
      sortedNodes.unshift(currentNode);
    }
    currentNode = currentNode.next;
  }

  for (var i = 0; i < sortedNodes.length - 1; i++) {
    sortedNodes[i].next = sortedNodes[i + 1];
  }

  sortedNodes[sortedNodes.length - 1].next = null;

  return sortedNodes[0];
};

module.exports = partition;
