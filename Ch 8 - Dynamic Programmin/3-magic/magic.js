// I - array
// O - index or null
// C - Time O(LogN) | Space O(LogN)
// E - Array w/o unique values

// create index cache
// begin in the middle of the array
 // if index value is less than element value, look in first half
 // else look in second half
 // continue on a LogN pattern until found, or index repeated in cache (meaning no magic index)

 // DS - hashtable (cache)
 // AP - iterative - binary search (log search)

 // comp - cache | index (P) | halfLenght