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