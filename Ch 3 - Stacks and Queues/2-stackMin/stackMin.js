//How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? push, pop and min should all operate in 0(1) time.

// I - Build a stack class which can track the minimum value
// O - standard pop and min output
// C - Time O(1) for all methods | Space O(n) | min and max value
// E/DQs - non numeric

//DS - an additional stack to track the minimum
//AP - for loop
//TR - n/a

//1. push() will add value to storage, and check last value of min stack.
  // if input is smaller than last min stack val, add to min stack
//2. pop() will remove and return last value from storage.
  // if pop value is equal to last min stack val, remove from min stack
//3. min() will return the last value of min stack

var Stack = require('./../util/Stack');

class StackMin extends Stack {
  constructor() {
    super();
    this.minimum = [];
    this.dLength = 0;
    this.mLength = 0;
  }

  push(value) {
    this._data.push(value);
    this.dLength++;
    if (this.mLength === 0 || value <= this.minimum[this.mLength - 1]) {
      this.minimum.push(value);
      this.mLength++;
    }
  }

  pop() {
    if (this._data[this.dLength - 1] === this.minimum[this.mLength - 1]) {
      this.minimum.pop();
      this.mLength--;
    }
    this.dLength--;
    return this._data.pop();
  }

  min() {
    return this.minimum[this.mLength - 1];
  }
}

module.exports = StackMin;
