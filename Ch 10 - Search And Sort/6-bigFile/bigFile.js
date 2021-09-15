// I - a large 20GB file, unsorted
// O - the large file sorted
// C - total memory of comp
// E - n/a

// read chunks of the file into memory (maybe 1 GB at a time)
// merge sort the information in memory, and write back to file (replace)
// take small amounts of each sorted chunk, and merge sort into a new file
// (basically your're taking chunks of chunks and merge sorting, once a sub-chunk is empty, get a new one)

let largeFile = [];
let externalFile = [];
let sortedFile = [];
let numberCache = {};

while (largeFile.length < 500) {
  let randomNum = Math.ceil(Math.random() * 500);
  if (!numberCache[randomNum]) {
    largeFile.push(randomNum);
    numberCache[randomNum] = true;
  }
}