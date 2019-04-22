var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element=array.unshift("foo")
  return array
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1]
  var element=array.splice(0, 0, "foo")
  return array
};
