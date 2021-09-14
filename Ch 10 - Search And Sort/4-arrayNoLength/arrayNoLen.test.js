const findIndexInModifiedArray = require('./arrayNoLen.js');

let array = [];

for (let i = 0; i <= 65; i++) {
  array.push(i);
}

test('Check valid input.', () => {
  expect(findIndexInModifiedArray(array, 64)).toBe(64);
})

test('Check invalid input.', () => {
  expect(findIndexInModifiedArray(array, 500)).toBe('No index found.');
})