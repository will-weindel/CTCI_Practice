//Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).

// I - a stack
// O - a sorted stack
// C - Time complexity? Space Complexity? range of numbers
// E-DQs - stack with one value, stack with no value, not a stack

// DS - we are only able to use one additional stack
// AP - for loops
// TR - n/a

var Stack = require('./../util/Stack');

var sortStack = function (stack) {
  let numberOfIterations = stack.size() - 1;
  let tempStack = new Stack();

  for (var i = 0; i <= numberOfIterations; i += 2) {
    let smallestValue = transitionStack(stack, tempStack, numberOfIterations - i);
    let secondSmallestValue = transitionStack(tempStack, stack, numberOfIterations - i - 1);
    tempStack.push(smallestValue);
    tempStack.push(secondSmallestValue);
  }
  sortToMainStack(tempStack, stack, tempStack.size() - 1);
  return stack;
};

var transitionStack = (fromStack, toStack, iterations) => {
  let value;
  for (var i = 0; i <= iterations; i++) {
    let temp = fromStack.pop();
    if (!value) {
      value = temp;
    } else if (temp < value) {
      toStack.push(value);
      value = temp;
    } else {
      toStack.push(temp);
    }
  }
  return value;
}

var sortToMainStack = (fromStack, toStack, iterations) => {
  if (!fromStack.peek()) {
    fromStack.pop();
    iterations--;
  }
  for (var i = 0; i <= iterations; i++) {
    toStack.push(fromStack.pop());
  }
}

module.exports = sortStack;