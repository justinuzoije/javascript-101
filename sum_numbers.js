numbers = [1, 4, 8];

function sumNumbers(theArray) {
  total = 0;
  for (var i = 0; i < theArray.length; i++) {
    total += theArray[i];
  }
  return total;
}



console.log(sumNumbers(numbers));
