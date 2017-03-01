function printBanner(text) {
  collection = "****";
  theString = "";
  for (var i = 0; i < text.length; i++) {
    collection += "*";
  }
  theString = "* " + text + " *";
  console.log(collection);
  console.log(theString);
  console.log(collection);
}

printBanner('Welcome to DigitalCrafts');
