//Implement a MyQueue class which implements a queue using two stacks.

var Stack = require('./../util/Stack');

// General idea is to pop all items from newest to oldest,
// this will reverse the order.
// Return items from the 'oldest' stack.

class MyQueue {
  constructor() {
    this.oldestStack = new Stack();
    this.newestStack = new Stack();
  }

  add(value) {
    while(!oldestStack.isEmpty()) {
      this.newestStack.push(this.oldestStack.pop());
    }
    this.newestStack.push(value);
  }

  remove() {
    while(!newestStack.isEmpty()) {
      this.oldestStack.push(this.newestStack.pop());
    }
    this.oldestStack.pop();
  }

  peek() {
    while(!newestStack.isEmpty()) {
      this.oldestStack.push(this.newestStack.pop());
    }
    this.oldestStack.peek();
  }

  isEmpty() {
    if (newestStack.isEmpty() && oldestStack.isEmpty()) return true;
    return false;
  }
}

module.exports = MyQueue;
