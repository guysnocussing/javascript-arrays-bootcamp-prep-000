function addElementToBeginningOfArray(arr, el) {
  var newArr = arr.unshift(el);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}
