const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon"

console.log(person1); //cambia il firstName anche di person1
console.log(person2);
//{ firstName: 'John', lastName: 'Doe', age: 25 }
//{ firstName: 'John', lastName: 'Doe', age: 25 }