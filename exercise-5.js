
//migliorare il codice ,  rest/spread operators


function sum(...nums) {
    let sum=0;
    for(let n of nums){
      sum+= n;
    }
    return sum;
  }

  
  console.log(sum(1,2,3,4,5));// output 15