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

const sortLargeFile = function(file) {
  let filePointer = 0;

  while (filePointer < file.length) {
    let dataReadToMemory = addDataToMemory(file, filePointer);
    externalFile.push(mergeSort(dataReadToMemory));
    filePointer += dataReadToMemory.length;
  }

  let chunkHolder = [];
  externalFile.forEach(element => chunkHolder.push([0, []]));

 while (sortedFile.length < 500) {
   for (let i = 0; i < chunkHolder.length; i++) {
     if (chunkHolder[i][1].length === 0) {
       chunkHolder[i][1].push(externalFile[i][chunkHolder[i][0]]);
       chunkHolder[i][0]++;
     }
   }

   let smallestValue = null;

   for (let i = 0; i < chunkHolder.length; i++) {
     if (!smallestValue || chunkHolder[i][1][0] < smallestValue) {
       smallestValue = chunkHolder[i][1][0];
     }
   }

   chunkHolder.forEach(chunk => {
     if (chunk[1][0] === smallestValue) {
       chunk[1].shift();
     }
   })

   sortedFile.push(smallestValue);
 }

 return sortedFile;
}


const addDataToMemory = function(file, startingIndex) {
  let chunkOfData = [];

  for (let i = 1; i <= 10; i++) {
    if (file[startingIndex] !== undefined) {
      chunkOfData.push(file[startingIndex]);
      startingIndex++;
    }
  }

  return chunkOfData;
}


const mergeSort = function(data) {
  return data.sort((a, b) => a - b);
}