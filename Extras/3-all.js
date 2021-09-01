class ThreeStackArray {
  constructor() {
    this.storage = [];
    this.indexStack1 = 0;
    this.indexStack2 = 1;
    this.indexStack3 = 2;
  }

  pushStack1(value) {
    this.storage[this.indexStack1] = value;
    this.indexStack1 += 3;
    return;
  }

  pushStack2(value) {
    this.storage[this.indexStack2] = value;
    this.indexStack1 += 3;
    return;
  }

  pushStack3(value) {
    this.storage[this.indexStack3] = value;
    this.indexStack1 += 3;
    return;
  }

  peekStack1() {
    return this.storage[this.indexStack1];
  }

  peekStack2() {
    return this.storage[this.indexStack2];
  }

  peekStack3() {
    return this.storage[this.indexStack3];
  }

  popStack1() {
    let temp = this.storage[this.indexStack1 - 3];
    this.storage[this.indexStack1 - 3] = null;
    this.indexStack1 -= 3;
    return temp;
  }

  popStack2() {
    let temp = this.storage[this.indexStack2 - 3];
    this.storage[this.indexStack2 - 3] = null;
    this.indexStack2 -= 3;
    return temp;
  }

  popStack3() {
    let temp = this.storage[this.indexStack3 - 3];
    this.storage[this.indexStack3 - 3] = null;
    this.indexStack3 -= 3;
    return temp;
  }
}

function MinValueStack() {
  this.storage = [];
  this.minValues = [];
}

MinValueStack.prototype.push = function(value) {
  this.storage.push(value);
  if (!this.minValues.length || value < this.minValues[this.minValues.length - 1]) {
    this.minValues.push(value);
  }
  return;
}

MinValueStack.prototype.pop = function() {
  let temp = this.storage.pop();
  if (temp === this.minValues[this.minValues.length - 1]) {
    this.minValues.pop();
  }
  return temp;
}

MinValueStack.prototype.findMinValue = function() {
  return this.minValues[this.minValues.length - 1];
}

class MultiStackArray {
  constructor(capacity) {
    this.storage = [[]];
    this.stackCapacity = capacity;
  }

  push(value) {
    let currentStack = this.storage[this.storage.length - 1];

    if (currentStack.length === this.stackCapacity) {
      this.storage.push([]);
      currentStack = this.storage[this.storage.length - 1];
    }

    currentStack.push(value);
    return;
  }

  pop() {
    let currentStack = this.storage[this.storage.length - 1];
    let temp = currentStack.pop();

    if (this.storage.length > 1 && currentStack.length === 0) {
      this.storage.pop();
    }

    return temp;
  }
}