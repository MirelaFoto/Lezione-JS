class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0){

      throw new Error ("The amount is invalid")
    }
      // throw an exception if amount is negative
    this.#amount += amount;
  }

  withdraw(amount) {

    if (amount<0 || amount > this.#amount){
      throw new Error (" It is imposible to withdraw. Check the amount you entered!")
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
/*  output:\exercise-1.js:20
      throw new Error (" It is imposible to withdraw. 
      Check the amount you entered!")  */ 

      
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();