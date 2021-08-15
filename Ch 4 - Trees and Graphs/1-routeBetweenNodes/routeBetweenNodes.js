//Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// I - two node references, one graph reference
// O - boolean (based on route)
// C - Time Comp | Space Comp | size of graph, type of graph, graph values (odd nodes)
// E - node does not exist, non node value

// DS - two caches for 'seen' nodes, two queues to hold nodes
// AP - BFS, for loop
// TR - n/a

var Graph = require('./../util/Graph');
var Queue = require('./../util/Queue');

function routeBetweenNodes(value1, value2, graph) {
  if (!graph.hasNode(value1)) return false;
  if (!graph.hasNode(value2)) return false;

  let firstNode = value1;
  let secondNode = value2;

  if (searchForTargetNode(firstNode, secondNode, new Queue(), {firstNode}, graph)) return true;
  if (searchForTargetNode(secondNode, firstNode, new Queue(), {secondNode}, graph)) return true;

  return false;
}

function addNewNodesToQueue(rootNode, queue, cache, graph) {
  for (let node in graph.findEdges(rootNode)) {
    if (!cache[node]) {
      queue.enqueue(node);
      cache[node] = true;
    }
  }
  return;
}

function searchForTargetNode(rootNode, target, queue, cache, graph) {
  addNewNodesToQueue(rootNode, queue, cache, graph);
  while (true) {
    let node = queue.dequeue();
    if (node === target) {
      return true;
    } else {
      addNewNodesToQueue(node, queue, cache, graph)
    }
    if (queue.isEmpty()) break;
  }
  return false;
}

module.exports = routeBetweenNodes;
