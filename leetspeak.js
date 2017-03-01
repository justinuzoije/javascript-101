//Python version
// regularText = raw_input("Please enter text: ")
//
// regularText = regularText.upper()
// regularText = regularText.replace('A', '4')
// regularText = regularText.replace('E', '3')
// regularText = regularText.replace('G', '6')
// regularText = regularText.replace('I', '1')
// regularText = regularText.replace('O', '0')
// regularText = regularText.replace('S', '5')
// regularText = regularText.replace('T', '7')
//
// print regularText


function leetspeak(text) {
  regularText = text;

  //The global modifier is used to change more than just the first occurence
  regularText = regularText.toUpperCase();
  regularText = regularText.replace(/A/g, '4');
  regularText = regularText.replace(/E/g, '3');
  regularText = regularText.replace(/G/g, '6');
  regularText = regularText.replace(/I/g, '1');
  regularText = regularText.replace(/O/g, '0');
  regularText = regularText.replace(/S/g, '5');
  regularText = regularText.replace(/T/g, '7');

  console.log(regularText);

}

leetspeak('Leet');
