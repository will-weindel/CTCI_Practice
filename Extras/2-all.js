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

const sumLists = function(list1, list2) {
  if (!list1.head) return list2;
  if (!list2.head) return list1;

  let currentNodeList1 = list1.head;
  let currentNodeList2 = list2.head;
  let carryover = 0;
  let summedList = new LinkedList();

  while (currentNodeList1 || currentNodeList2 || carryover) {
    let sum = 0;
    sum += currentNodeList1 ? currentNodeList1.value : 0;
    sum += currentNodeList2 ? currentNodeList2.value : 0;
    sum += carryover ? carryover : 0;

    if (carryover) {
      carryover = 0;
    }

    if (sum >= 10) {
      sum -= 10;
      carryover = 1;
    }

    summedList.addToTail(new Node(sum));
    currentNodeList1 = currentNodeList1 ? currentNodeList1.next : null;
    currentNodeList2 = currentNodeList2 ? currentNodeList2.next : null;
  }

  return summedList;
}

const sumLists2 = function(list1, list2) {

  if (list1.length !== list2.length) {
    let shorterList = list1.length > list2.length ? list2 : list1;
    for (let i = 0; i < Math.abs(list1.length - list2.length); i++) {
      shorterList.addToHead(new Node(0));
    }
  }

  let carryover = 0;
  let summedList = new LinkedList();

  const recurseSumLists = function(node1, node2) {
    if (!node1 && !node2) return;

    recurseSumLists(node1.next, node2.next);
    let sum = node1.value + node2.value + carryover;

    if (carryover) {
      carryover = 0;
    }

    if (sum >= 10) {
      sum -= 10;
      carryover = 1;
    }

    summedList.addToHead(new Node(sum));
    return;
  }

  recurseSumLists(list1.head, list2.head);
  return summedList;
}

const isPalindrome = function(list) {
  let headPointer = list.head;

  const recurseIsPalindrome = function(node) {
    if (!node) return 1;

    let booleanIdent = recurseIsPalindrome(node.next);

    if (booleanIdent !== 1) return booleanIdent;
    if (headPointer.value !== node.value) return false;
    if (headPointer === node || headPointer.next === node) return true;

    headPointer = headPointer.next;
    return booleanIdent;
  }

  return recurseIsPalindrome(list.head);
}

const isIntersection = function(list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let list1Length = 0;
  let list2Length = 0;

  while (currentNode1 || currentNode2) {
    if (currentNode1) {
      list1Length++;
      currentNode1 = currentNode1.next;
    }
    if (currentNode2) {
      list2Length++;
      currentNode2 = currentNode2.next;
    }
  }

  let longerListNode = list1Length >= list2Length ? list1.head : list2.head;
  let shorterListNode = list1Length >= list2Length ? list2.head : list1.head;

  for (let i = 1; i <= Math.abs(list1Length - list2Length); i++) {
    longerListNode = longerListNode.next;
  }

  while (longerListNode && shorterListNode) {
    if (longerListNode === shorterListNode) {
      return longerListNode;
    }
    else {
      longerListNode = longerListNode.next;
      shorterListNode = shorterListNode.next;
    }
  }

  return false;
}

const loopDetection = function(list) {
  let slowRunner = list.head;
  let fastRunner = list.head;

  while (fastRunner) {
    if (fastRunner === slowRunner) break;
    if (!fastRunner.next || !fastRunner.next.next) return false;
    else {
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next.next;
    }
  }

  slowRunner = list.head;

  while (slowRunner) {
    if (slowRunner === fastRunner) return slowRunner;
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }

  return null;
}