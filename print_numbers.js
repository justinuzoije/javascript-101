function printNumbers(starNumber, endNumber){
  for (var i = starNumber; i < endNumber+1; i++) {
    console.log(i);
  }
}

function printNumbersWhile(startNumber, endNumber) {
  count = startNumber;
  while(count <= endNumber) {
    console.log(count);
    count++;
  }

}

printNumbers(1,10);

printNumbersWhile(1, 10);
