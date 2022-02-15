function sumUntil(maxValue) {
  let sum = 0

  for (let i = 0; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5)); // resultato 15
console.log(sumUntil(3)) // resultato 6