function printSquare(size) {
  var collection = "";
  for (var i = 0; i < size; i++) {
    collection += "*";
  }
  for (var j = 0; j < size; j++) {
    console.log(collection);
   }
}


printSquare(5);
