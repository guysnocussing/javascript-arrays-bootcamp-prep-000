var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, el) {
  var newArr = arr.unshift(el);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}
