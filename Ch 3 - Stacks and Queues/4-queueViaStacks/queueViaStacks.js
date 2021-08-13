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
    while(!this.oldestStack.isEmpty()) {
      this.newestStack.push(this.oldestStack.pop());
    }
    this.newestStack.push(value);
  }

  remove() {
    while(!this.newestStack.isEmpty()) {
      this.oldestStack.push(this.newestStack.pop());
    }
    return this.oldestStack.pop();
  }

  peek() {
    while(!this.newestStack.isEmpty()) {
      this.oldestStack.push(this.newestStack.pop());
    }
    this.oldestStack.peek();
  }

  isEmpty() {
    if (this.newestStack.isEmpty() && this.oldestStack.isEmpty()) return true;
    return false;
  }
}

module.exports = MyQueue;
