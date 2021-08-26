// I - number of disks
// O - set of towers
// C - Time (w/o memo) is O(2^n)
// E - 0 towers

// create a Towers Of Hanoi class (factory function) with 3 stacks
// create a move method
// create an initialize method
// move method will have a recurse function which takes a val, source tower, buffer tower and desintation tower.
// begin at base case and work backwards

const TowersOfHanoi = function() {
  this.stack1 = [];
  this.stack2 = [];
  this.stack3 = [];
}

TowersOfHanoi.prototype.moveDisks = function(n) {
  if (n < 1) return 'Please execute with value of 1 or greater.'
  this._initializeStack(n);

  function recurseMoveDisks(val, source, buffer, destination) {
    if (val === 1) {
      destination.push(source.pop());
      return;
    }
    recurseMoveDisks(val - 1, source, destination, buffer);
    destination.push(source.pop());
    recurseMoveDisks(val - 1, buffer, source, destination);
    return;
  }

  recurseMoveDisks(n, this.stack1, this.stack2, this.stack3);
  return;
}

TowersOfHanoi.prototype._initializeStack = function(n) {
  for (let i = n; i >= 1; i--) {
    this.stack1.push(i)
  }
  return;
}

// TESTS

let towers = new TowersOfHanoi();
console.log(towers);
towers.moveDisks(5);
console.log(towers);