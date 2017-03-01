//Python Version
// word = raw_input("Please enter a word: ")
//
// num_a = word.count('a')
// num_e = word.count('e')
// num_i = word.count('i')
// num_o = word.count('o')
// num_u = word.count('u')
//
// if num_a > 1:
//     new_word = word.partition('a')
// if num_e > 1:
//     new_word = word.partition('e')
// if num_i > 1:
//     new_word = word.partition('i')
// if num_o > 1:
//     new_word = word.partition('o')
// if num_u > 1:
//     new_word = word.partition('u')
//
// new_word = new_word[0] + new_word[1]*4 + new_word[2]
// print new_word

//There is no count function and no partition function in Javascript

function longLongVowels(word){
  a_char = "";
  a_sequence = "";
  for (var i = 0; i < word.length; i++) {
    if (word[i] == word[i]) {
      a_char = word[i];
      // word = word.replace(a_char, a_sequence);

    }

  }
  // return new_word;
  return a_char;
}

console.log(longLongVowels('Good'));
// longLongVowels('Cheese');
// longLongVowels('Man');
