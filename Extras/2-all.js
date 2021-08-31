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