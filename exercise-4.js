

  class BankAccount {

    constructor(value){
      this.value=value;
    }
    deposit(d_amount){
     console.log(this.value+=d_amount)
    }
  withdraw (w_amount){
    let balance= this.value-w_amount
  if (balance >0){
    console.log(this.value-=w_amount)}
  else
  { console.log("not enough")}
    
  }
    view(){
      console.log(this.value)
    }
  }
  
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(800);
  bankAccount.view();
 //output 1500 
// 1700
// 900
// 900 


