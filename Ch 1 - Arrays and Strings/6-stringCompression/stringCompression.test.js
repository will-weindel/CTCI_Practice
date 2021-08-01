const stringCompression = require('./stringCompression');
const stringCompressionSol = require('./stringCompressionSol');

test('Compresses strings down when shorter than original', () => {
  expect(stringCompression('aaaaaa')).toBe(stringCompressionSol('aaaaaa'));
  expect(stringCompression('abbcccddddeeeee')).toBe(
    stringCompressionSol('abbcccddddeeeee')
  );
  expect(stringCompression('HowdyDoodyDoodlydoooooo')).toBe(
    stringCompressionSol('HowdyDoodyDoodlydoooooo')
  );
  expect(stringCompression('zwsexdrcftvgybhunjim')).toBe(
    stringCompressionSol('zwsexdrcftvgybhunjim'));
});

test('returns original string if compression is not shorter', () => {
  expect(stringCompression('hahahahaha')).toBe(
    stringCompressionSol('hahahahaha')
  );
  expect(stringCompression('Bananassaregood')).toBe(
    stringCompressionSol('Bananassaregood')
  );
  expect(stringCompression('kimjnhybtgvrfced')).toBe(
    stringCompressionSol('kimjnhybtgvrfced'));
});
