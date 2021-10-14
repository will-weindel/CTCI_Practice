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

const findYearWithMostPeople = function(array) {
  let currentCount = 0;
  let maxCountAndYear = [0, 0];
  let populationGrowthDecay = {};
  let firstYear = 101;
  let lastYear = -1;

  for (let person of array) {
    let pGD = populationGrowthDecay;

    if (person[0] < firstYear) firstYear = person[0];
    if (person[1] > lastYear) lastYear = person[1];

    if (pGD[person[0]]) pGD[person[0]]++;
    else pGD[person[0]] = 1;

    if (pGD[person[1] + 1]) pGD[person[1] + 1]--;
    else pGD[person[1] + 1] = -1;
  }

  for (let i = firstYear; i <= lastYear; i++) {
    if (populationGrowthDecay[i]) currentCount += populationGrowthDecay[i];
    if (currentCount > maxCountAndYear[0]) maxCountAndYear = [currentCount, i];
  }

  return maxCountAndYear;
}

const findAllDivingBoardLengths = function(num, a, b) {
  const longerPlank = a > b ? a : b;
  const shorterPlank = a > b ? b : a;

  let currentlength = shorterPlank * num;
  let allLengths = [currentlength];

  for (let i = 1; i <= num; i++) {
    currentlength += longerPlank - shorterPlank;
    allLengths.push(currentlength);
  }

  return allLengths;
}

let objLit = {
  name: 'Will'
}

let objCre = Object.create(objLit);

const FactoryCreate = function() {
  return Object.create(objCre);
}

let childCre = FactoryCreate();

const Construct = function() {
  this.name = 'William'
}

Construct.prototype.getName = function() {
  return this.name;
}

let pseudoClass = new Construct();

class Full {
  constructor() {
    this.name = 'Bill';
  }

  getName() {
    return this.name;
  }
}

let fullClass = new Full();

const bisectSquares = function(sq1, sq2) {
  const sq1Middle = [(sq1.lowerR[0] + sq1.lowerL[0]) / 2, (sq1.upperL[1] + sq1.lowerL[1]) / 2];
  const sq2Middle = [(sq2.lowerR[0] + sq2.lowerL[0]) / 2, (sq2.upperL[1] + sq2.lowerL[1]) / 2];

  const bisectSlope = (sq1Middle[1] - sq2Middle[1]) / (sq1Middle[0] - sq2Middle[0]);
  const bisectYIntercept = sq1Middle[1] - (bisectSlope * sq1Middle[0]);

  return `y = ${bisectSlope}x + ${bisectYIntercept}`;
};

const playMasterMind = function(guess, solution) {
  const amountsRYGB = { R: 0, Y: 0, G: 0, B: 0 };
  let hits = 0;
  let pseudoHits = 0;

  for (let i = 0; i < solution.length; i++) {
    if (guess[i] === solution[i]) hits++;
    else amountsRYGB[solution[i]]++;
  }

  for (let i = 0; i < guess.length; i++) {
    if (amountsRYGB[guess[i]] > 0) {
      pseudoHits++;
      amountsRYGB[guess[i]]--;
    }
  }

  return [hits, pseudoHits];
};

const subSort = function(array) {
  const sortedArray = mergeSort(array);
  const indexRange = [ null, null ];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] != array[i]) {
      if (indexRange[0] === null) indexRange[0] = i;
      else indexRange[1] = i;
    }
  }

  return indexRange;
};


const mergeSort = function(array) {

  if (array.length <= 1) return array;

  const leftHalf = mergeSort(array.slice(0, array.length / 2));
  const rightHalf = mergeSort(array.slice(array.length / 2));
  const mergedArray = [ ];
  let leftIndex = 0;
  let rightIndex = 0;

  for (let i = 0; i <= leftHalf.length + rightHalf.length - 1; i++) {
    if (!rightHalf[rightIndex] || leftHalf[leftIndex] && leftHalf[leftIndex] <= rightHalf[rightIndex]) {
      mergedArray.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray;
};