function matrixAdd(array_one, array_two) {
  new_array = [[],[]];
  // new_array[0][0] = array_one[0][0] + array_two[0][0];
  // new_array[0][1] = array_one[0][1] + array_two[0][1];
  // new_array[1][0] = array_one[1][0] + array_two[1][0];
  // new_array[1][1] = array_one[1][1] + array_two[1][1];
  // return new_array;

  
  for (var i = 0; i < array_one.length; i++){
    for(var j = 0; j < array_two.length; j++) {
      new_array[i][j] = array_one[i][j] + array_two[i][j];
    }
  }
  return new_array;
}

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));
