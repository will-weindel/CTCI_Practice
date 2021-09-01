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

class QueueViaStacks {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  enqueue(value) {
    this.enqueueStack.push(value);
    return;
  }

  dequeue() {
    if (this.isEmpty(this.dequeueStack)) {
      while (this.enqueueStack.length) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }

    return this.dequeueStack.pop();
  }

  isEmpty(stack) {
    return !stack.length;
  }
}
class Stack {
  constructor() {
    this.storage = [];
    this.tempStorage = [];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    return this.storage.pop();
  }

  sortStack() {
    let smallestValue = null;
    let secondSmallestValue = null;
    let remainingItems = this.storage.length;

    while (remainingItems) {
      for (let i = 0; i < remainingItems; i++) {
        let temp = this.storage.pop();
        if (!smallestValue || temp < smallestValue) {
          if (smallestValue) {
            this.tempStorage.push(smallestValue)
          }
          smallestValue = temp;
        }
        else {
          this.tempStorage.push(temp);
        }
      }

      for (let i = 0; i < remainingItems - 1; i++) {
        let temp = this.tempStorage.pop();
        if (!secondSmallestValue || temp < secondSmallestValue) {
          if (secondSmallestValue) {
            this.storage.push(secondSmallestValue)
          }
          secondSmallestValue = temp;
        }
        else {
          this.storage.push(temp);
        }
      }

      smallestValue ? this.tempStorage.push(smallestValue) : null;
      secondSmallestValue ? this.tempStorage.push(secondSmallestValue) : null;

      smallestValue = null;
      secondSmallestValue = null;
      remainingItems = this.storage.length;
    }

    this.storage = this.tempStorage;
    this.tempStorage = [];
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(node) {
    if (!this.head) this.head = node;
    if (!this.tail) this.tail = node;
    else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = node;
    }
    return;
  }

  dequeue() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }

  isEmpty() {
    return !this.head;
  }

  getOldestTimestamp() {
    if (!this.head) return null;
    return this.head.timeStamp;
  }
}

class AnimalNode {
  constructor(timeStamp, type) {
    this.type = type;
    this.timeStamp = timeStamp;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new LinkedList();
    this.catQueue = new LinkedList();
    this.timeStamp = 0;
  }

  addNewDog() {
    let newDog = new AnimalNode(this.timeStamp, 'dog');
    this.dogQueue.enqueue(newDog);
    this.timeStamp++;
    return;
  }

  addNewCat() {
    let newCat = new AnimalNode(this.timeStamp, 'cat');
    this.catQueue.enqueue(newCat);
    this.timeStamp++;
    return;
  }

  adoptADog() {
    if (this.dogQueue.isEmpty()) return 'Sorry! No dogs.';
    return this.dogQueue.dequeue();
  }

  adoptACat() {
    if (this.catQueue.isEmpty()) return 'Sorry! No cats.';
    return this.catQueue.dequeue();
  }

  adoptEitherAnimal() {
    let availableDogs = !this.dogQueue.isEmpty();
    let availableCats = !this.catQueue.isEmpty();

    if (!availableDogs && !availableCats) return 'Sorry! No animals to adopt.';
    if (!availableDogs) return this.catQueue.dequeue();
    if (!availableCats) return this.dogQueue.dequeue();

    let boolIdent = this.dogQueue.getOldestTimestamp() < this.catQueue.getOldestTimestamp();
    return boolIdent ? this.dogQueue.dequeue() : this.catQueue.dequeue();
  }
}