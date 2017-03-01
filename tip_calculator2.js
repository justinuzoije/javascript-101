function tipAmount(amount, quality) {
  if (quality == 'good') {
    return amount*0.20;
  } else if (quality == 'fair') {
    return amount*0.15;
  } else {
    return amount*0.10;
  }
}

function totalAmount(amount, quality) {
  return amount + tipAmount(amount, quality);
}

console.log(totalAmount(100, 'good'));

console.log(totalAmount(40, 'fair'));
