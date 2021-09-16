// I - a stream of numbers, and a look up value
// O - a rank (sum of all numbers less than or equal to - but not including self - given lookup)
// C - Time O Log N | Space Linear
// E - N/A

// add stream of numbers to a BST
// on lookup, add all left values plus node if node is less than lookup
// if node is eqaul to look up, add all left count