var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element=array.unshift("foo")
  return array
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = ["foo"]
  var element=array.splice(0, 1, 1)
  return array
};
