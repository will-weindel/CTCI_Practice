/*
A monochrome screen is stored as a single array of bytes, allowing eight consecutive
pixels to be stored in one byte. The screen has width w, where w is divisible by 8 (that is, no byte will
be split across rows). The height of the screen, of course, can be derived from the length of the array
and the width. Implement a function that draws a horizontal line from ( xl, y) to ( x2, y).
The method signature should look something like:
drawline(byte[] screen, int width, int xl, int x2, int y)
*/

// I - an array, width, x1, x2, and y
// O - the array with a 'line'
// C - Time linear | Space linear
// E - n/a

// general idea to to find starting index and then loop through 'row'
// if a full bit is to be changed, just vchange full byte

var drawLine = function (screen, width, x1, x2, y) {
  let startingIndex = (y * width);
  let mask = (1 << x1 - 1);
  let absolutePixel = x1;

  for (let i = 1; i <= width; i++) {
    if (x1 <= 8 * i) {
      startingIndex += width - i;
      break;
    }
  }

  while (absolutePixel <= x2) {
    if (mask > (1 << 7)) {
      startingIndex--;
      mask = 1;
    }
    setBitToOne(array, startingIndex, mask);
    if (mask === (1 << 7) && (absolutePixel + 8) <= x2) {
      while (absolutePixel + 8 <= x2) {
        startingIndex--;
        array[startingIndex] = (1 << 8) - 1;
        absolutePixel += 8;
      }
      startingIndex--;
      mask = 1;
    } else {
      mask <<= 1;
      absolutePixel++;
    }
  }

  return array;
};

module.exports = drawLine;
