const person = {
  firstName: 'John',
  lastName: 'Doe'
};
// use optional chaining ?.


console.log(person.address?.city); //undefined
console.log(person.fullName?.()); //undefined


/* su vs-code, quando salvavo il file si creavano dei spazi tra ? e . , si comportava come un operatore ternario
*/
