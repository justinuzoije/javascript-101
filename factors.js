function factor(number) {
  factors = [];
  for (var i = 1; i < number+1; i ++) {
    if ((number % i) === 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

factor(120);
