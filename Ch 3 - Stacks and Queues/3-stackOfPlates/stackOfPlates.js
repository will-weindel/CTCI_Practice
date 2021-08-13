//Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure that mimics this. It should be composed of several stacks and should create a new stack once the previous one exceeds capacity. push and pop should behave identically to a single stack (that is, pop should return the same values as it would if there were just a single stack).

//BONUS implement a function popAt which performs a pop operation on a specific sub-stack.

// I - implement a DS that represents multiple stacks
// O - the DS
// C - Time Complexities Space Comp, max vals per stack
// E/DQ - n/a

//DS - stackSet is array, capacity is object
//AP -
//TR - n/a

// Work through each method, the stack will need reference to the full stackSet,
// each individual stack, and the ability to change the current active set.

var Stack = require('./../util/Stack');

class StackOfPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [[]];
    this.currentStackSize = 0;
    this.currentStack = this.stackSet[0];
  }

  getLastStack() {
    return this.currentStack;
  }

  push(value) {
    if (this.currentStackSize < this.capacity) {
      this.currentStack.push(value);
      this.currentStackSize++;
    } else {
      this.stackSet.push([]);
      this.currentStack = this.stackSet[this.stackSet.length - 1];
      this.currentStack.push(value);
      this.currentStackSize = 1;
    }
  }

  pop() {
    if (this.currentStack.length === 0) return null;
    let temp = this.currentStack.pop();
    this.currentStackSize--;
    if (this.currentStackSize === 0 && this.stackSet.length !== 1) {
      this.stackSet.pop();
      this.currentStack = this.stackSet[this.stackSet.length - 1];
      this.currentStackSize = this.currentStack.length;
    }
    return temp;
  }

  peek() {
    return this.currentStack[this.currentStack.length - 1];
  }

  isEmpty() {
    return this.currentStack.length > 0;
  }

  popAt(index) {
    if (this.currentStack.length === 0) return null;
    let temp = this.currentStack[index];
    this.currentStack.splice(index, 1);
    this.currentStackSize--;
    if (this.currentStackSize === 0 && this.stackSet.length !== 1) {
      this.stackSet.pop();
      this.currentStack = this.stackSet[this.stackSet.length - 1];
      this.currentStackSize = this.currentStack.length;
    }
    return temp;
  }
}

module.exports = StackOfPlates;
