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

function splitAmount(amount, quality, people) {
  total = totalAmount(amount, quality);
  return total/people;
}

console.log(splitAmount(100, 'good', 5));

console.log(splitAmount(40, 'fair', 2));
