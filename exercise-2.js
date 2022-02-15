function pow(base) {
  let counter = 0
  return function closureFunction(power) {
    counter++
    return Math.pow(base, power);
  }

}


const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log("2⁴: " + pow2(4));
console.log("2²: " + pow2(2));
console.log("2⁸ : " + pow2(8));

console.log('--- Power of 5 ---');
console.log("5⁴ :" + pow5(4));
console.log("5²: " + pow5(2));
console.log("5⁸: " + pow5(8));
/*--- Power of 2 ---
2⁴: 16
2²: 4
2⁸ : 256
--- Power of 5 ---
5⁴ :625
5²: 25
5⁸: 390625*/