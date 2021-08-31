const removeDups = function(list) {
  if (!list.head || !list.head.next) return list;

  let nodeValueCache = {};
  let previousNode = list.head;
  let currentNode = list.head.next;

  nodeValueCache[previousNode.value] = 1;

  while (currentNode) {
    if (currentNode.value in nodeValueCache) {
      list.removeNode(currentNode.value);
    }
    else {
      nodeValueCache[currentNode.value] = 1;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  return list;
}

const removeKthToLast = function(num, list) {
  if (num > list.length) return 'No nodes.';
  if (num <= 0) return 'No nodes.';
  if (num === list.length) return list.removeHead();
  if (num === 1) return list.removeTail();

  let previousNode = list.head;
  let currentNode = list.head.next;
  let distanceToLast = list.length - 1;

  while (currentNode) {
    if (distanceToLast === num) {
      return list.removeNode(currentNode.value);
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
    distanceToLast--;
  }

  return 'Function error.'
}

const removeMiddleNode = function(list) {
  if (!list.head) return null;
  if (!list.head.next) {
    let temp = list.head;
    list.head = null;
    list.tail = null;
    list.length--;
    return temp;
  }
  if (!list.head.next.next) {
    let temp = list.head;
    list.head = list.head.next;
    list.length--;
    return temp;
  }

  let previousNode = list.head;
  let currentNode = previousNode.next;
  let fastRunner = currentNode.next;

  while (currentNode) {
    if (!fastRunner.next || !fastRunner.next.next) {
      let temp = currentNode;
      previousNode.next = currentNode.next;
      list.length--;
      return currentNode;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
    fastRunner = fastRunner.next.next;
  }
  return 'Function error.';
}

const partitionLinkedList = function(value, list) {
  if (!list.head) return null;
  if (!list.head.next) return list;

let previousNode = list.head;
  let currentNode = list.head.next;

  while (currentNode) {
    if (currentNode.value < value) {
      let temp = list.head;
      list.head = currentNode;
      previousNode.next = currentNode.next;
      currentNode.next = temp;
      currentNode = previousNode.next;
    }
    else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return list;
}