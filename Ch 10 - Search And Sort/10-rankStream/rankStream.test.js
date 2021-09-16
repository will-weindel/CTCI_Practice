const IntegerRanker = require('./rankStream.js');

let intRanker = new IntegerRanker();
intRanker.addInteger(5);
intRanker.addInteger(1);
intRanker.addInteger(4);
intRanker.addInteger(4);
intRanker.addInteger(5);
intRanker.addInteger(9);
intRanker.addInteger(7);
intRanker.addInteger(13);
intRanker.addInteger(3);

test('Interger Ranker', () => {
  console.log(intRanker);
})