function printBox(width, height) {
  var top = "";
  var side = "";
  for (var i = 0; i < width; i++) {
    top += "*";
  }

  side +="*";
  for (var j = 0; j < width-2; j++) {
    side += " ";
  }
  side += "*";

  console.log(top);

  for (var k = 0; k < height-2; k++) {
    console.log(side);
  }

  console.log(top);

}


printBox(6, 4);
