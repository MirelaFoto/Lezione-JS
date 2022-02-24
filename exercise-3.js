class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
   throw NegativeAmountError;
      // throw new Error('The amount provided cannot be negative'); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
       throw NegativeAmountError;
      // throw new Error('The amount provided cannot be negative'); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw WithdrawNotPermittedError.name;
      // throw new Error('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class Error {
  constructor(message) {
    this.message = message;
     }}


   class NegativeAmountError extends Error {
    constructor(message) {
      super(message);
       this.name = "Negative Amount Error"
    }

   }
   class WithdrawNotPermittedError extends Error{

    constructor(message) {
      super(message);
      this.name = '" Withdraw +" "+ Not+" "+Permitted +" "+Error"'
     
    }


   }

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log(e);
}