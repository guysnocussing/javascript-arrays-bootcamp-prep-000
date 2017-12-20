var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, el) {
  var newArr = [el, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArr = [ ...arr, el];
  return newArr;
}


function destructivelyAddElementToEndOfArray(arr, el) {
  return arr.push(el);
}
