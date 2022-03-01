function sum(...nums) {
    let sum=0;
    for(let n of nums){
      sum+= n;
    }
    return sum;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(1,2,3));