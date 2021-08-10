//Describe (write) how you could use a single array to implement three stacks.

// I - multi inputs, inputs will be values added to stack 1 2 or 3,
// O - depends on method call, but we are looking for standard stack calls
// C - Time and Space will depend on each method, min and max values for input, data types etc.
// E/DQ - given none numeric vals

// DS - single array for stack, no additional structures
// AP - many loops to iterate through stack
// TR - may need to transform input into string (so we can use charAt)

// the general idea is to prepend any value with a flag, then loop through the stack
// looking for the identifier to return a value specific to the method.

var ThreeInOne = function () {
  this.container = [];
  //finish this
};

ThreeInOne.prototype.push1 = function (value) {
  //
};

ThreeInOne.prototype.push2 = function (value) {
  //
};

ThreeInOne.prototype.push3 = function (value) {
  //
};

ThreeInOne.prototype.pop1 = function () {
  //
};

ThreeInOne.prototype.pop2 = function () {
  //
};

ThreeInOne.prototype.pop3 = function (value) {
  //
};

ThreeInOne.prototype.peek1 = function () {
  //
};

ThreeInOne.prototype.peek2 = function () {
  //
};

ThreeInOne.prototype.peek3 = function () {
  //
};

ThreeInOne.prototype.isEmpty1 = function () {
  //
};

ThreeInOne.prototype.isEmpty2 = function () {
  //
};

ThreeInOne.prototype.isEmpty3 = function () {
  //
};

module.exports = ThreeInOne;
