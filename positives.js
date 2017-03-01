function positiveNumbers(array) {
  positiveArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positiveArray.push(array[i]);
    }
  }
  return positiveArray;
}


console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));
