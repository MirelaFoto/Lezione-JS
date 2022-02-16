function calculate() {

  let result = 0;
  return {
    add(i) {
      result += i;
      return this;
    },
    sub(i) {
      result -= i;
      return this;
    },
    multiply(i) {
      result *= i;
      return this;
    },
    divide(i) {
      result /= i;
      return this;
    },
    printResult() {
      console.log("Final result: " + result)
    }


  }
};

const calculator = calculate();
calculator
  .add(2)
  .add(4)
  .multiply(3)
  .sub(1)
  .sub(3)
  .divide(2)
  .printResult(); //Final result: 7