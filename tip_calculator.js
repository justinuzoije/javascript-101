function tipAmount(amount, quality) {
  if (quality == 'good') {
    return amount*0.20;
  } else if (quality == 'fair') {
    return amount*0.15;
  } else {
    return amount*0.10;
  }
}

console.log(tipAmount(100, 'good'));

console.log(tipAmount(40, 'fair'));
