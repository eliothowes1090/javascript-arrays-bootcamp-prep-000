var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element=array.unshift("foo")
  return array
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1]
  var element=array.splice(0, 0, "foo")
  return array
};

function addElementToEndOfArray(array, element) {
  var array = [1]
  var element=array.push("foo")
  return array
};

function destructivelyAddElementToEndOfArray(array, element) {
  const array = [1]
  var element=array.splice(array.length, 1, "foo")
  return array
};

function accessElementInArray(array, index) {
  var array = [1]
  var index
};
