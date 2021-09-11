// DATA STRUCTURES
// Array (1d, 2d)
// HashTable (Standard, Map, Set)
// Node (Binary, Graph, LinkedList)
// Stack (LIFO)
// Queue (FIFO)
// Heap (Min | Max | Priority)
// LinkedList (Double LL)
// Binary Tree (BST)
// n-ary Tree
// AVL Tree (Link)
// Red-Black Tree | (Link)
// B-Tree | (Link)
// Trie
// Graph
// Bloom Filter
// LRU Cache (Link)

// Array (1d, 2d)

[], [[],[]]

// HashTable (Map, Set, Standard)

{};
new Map(); // set | has | get
new Set(); // add | has

class Hash {
    constructor() {
        this.data = [];
    }
    hash(){}
    add(){}
    search(){}
    remove(){}
    updateCapacity(){}
}


// Node (Binary, Graph, LinkedList)

class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null; // not always possible
    }
}

class GraphNode {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

class LLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack - LIFO

class Stack {
    constructor() {
        this.data = [];
    }
    push(){ O(1) };
    pop(){ O(1) };
    peek(){ O(1) };
    isEmpty(){ O(1) };
}

// Queue - FIFO

class Queue {
    constructor(){
        this.data = [];
    }
    enqueue(){ O(1) };
    dequeue(){ O(1) };
    peek(){ O(1) };
    isEmpty(){ O(1) };
}

// Heap (Min | Max | Priority)

class Heap {
    constructor(){
        this.data = [];
    }
    add(){}
    remove(){}
    HeapifyUp(){} // Math.ceil(index / 2) - 1;
    HeapifyDown(){} // index * 2 + 1 || index * 2 + 2
    isEmpty(){}
    peek(){}
}

// LinkedList (Double LL)

class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(){}
    addToTail(){}
    removeHead(){}
    removeTail(){}
    search(){}
}

// Binary Tree (BST)

class BinaryTree {
    consructor() {
        this.head = null;
    }
    insert(){}
    delete(){}
    find(){}
    preOrderTraverse(){}
    inOrderTraverse(){}
    postOrderTraverse(){}
}

// n-ary Tree

class nAryTree {
    constructor(){
        this.head = null;
    }
    insert(){}
    delete(){}
    find(){}
}

class LRUNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLL {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addToHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return null;
    }

    let temp = this.head;
    this.head = node;
    this.head.next = temp;
    temp.previous = this.head;

    return null;
  }

  moveToHead(node) {
    if (node === this.head) return null;
    if (node === this.tail) this.removeFromTail();

    let previousNode = node.previous;
    let nextNode = node.next;

    previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;

    this.addToHead(node);
    node.previous = null;
    return null;
  }

  removeFromTail() {
    let temp = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return temp;
  }
}

class LRUCache {
  constructor(capacity) {
    this.indexLookupTable = {};
    this.keyValueList = new DoubleLL();
    this.capacity = capacity;
    this.nodeCount = 0;
  }

  put(key, value) {
    if (this.indexLookupTable[key]) {
      this.indexLookupTable[key].value = value;
      this.keyValueList.moveToHead(this.indexLookupTable[key]);
      return null;
    }

    if (this.nodeCount === this.capacity) {
      let temp = this.keyValueList.removeFromTail();
      delete this.indexLookupTable[temp.key];
      this.nodeCount--;
    }

    let newNode = new LRUNode(key, value);
    this.indexLookupTable[key] = newNode;
    this.keyValueList.addToHead(newNode);
    this.nodeCount++;
    return null;
  }

  get(key) {
    this.keyValueList.moveToHead(this.indexLookupTable[key]);
    return this.indexLookupTable[key].value;
  }
}