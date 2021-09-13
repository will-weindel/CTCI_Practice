// I - two sorted arrays
// O - one merged/sorted array
// C - are all values unique? all ints? return new array?
// E - diff data types

// two pointer -> one at beginning of each array
// compare (p) vals, push smaller val into new array
// update pointers

const mergeTwoArrays = function(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  let arr1Index = 0;
  let arr2Index = 0;
  const mergedArray = [];

  while (arr1[arr1Index] || arr2[arr2Index]) {
    if (!arr1[arr1Index]) {
      mergedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
    else if (!arr2[arr2Index]) {
      mergedArray.push(arr1[arr1Index]);
      arr1Index++;
    }
    else if (arr1[arr1Index] < arr2[arr2Index]) {
      mergedArray.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      mergedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  return mergedArray;
}