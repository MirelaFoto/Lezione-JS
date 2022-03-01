const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  };
  // vediamo sulla console solo id,age


  const json =JSON.stringify(person,['id','age'])
  
  console.log(json) //output {"id":1,"age":25}