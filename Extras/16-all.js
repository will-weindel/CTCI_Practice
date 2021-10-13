const subtract = function(a, b) {

  for (let i = 1; i <= Math.abs(b); i++) {
    a += -1;
  }

  return a;
}

const multiply = function(a, b) {
  let temp = 0;

  for (let i = 1; i <= Math.abs(b); i++) {
    temp += a;
  }

  return temp;
}

const divide = function(a, b) {
  let count = 0;
  let temp = 0;

  while (temp < a) {
    count++;
    temp += b;
  }

  return count;
}