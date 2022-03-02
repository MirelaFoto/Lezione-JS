const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  
  
  const id = person.id;
  const personInfo = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
  }
  const result = {id, ...personInfo}
  
  
    console.log( id,"Other info:",personInfo)
    //outpput: 1 Other info: { firstName: 'Mario', lastName: 'Rossi', age: 25 }