var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, el) {
  var newArr = arr.unshift(el);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}

function addElementToEndOfArray(arr, el) {
  var newArr = arr.push(el);
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  return arr.push(el);
}
