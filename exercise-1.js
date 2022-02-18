const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon"

console.log(person1);
console.log(person2);
// { firstName: 'Simon', lastName: 'Doe', age: 25 }
// { firstName: 'Simon', lastName: 'Doe', age: 25 }

/* in questo caso cambia anche "firsName" di person1 perche il operatore assegna"=" non
fa una copia dell'oggetto person1 ma solo mostra a quale oggetto si riferisce person2" */