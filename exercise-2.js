const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {const people = persons.find(item=>item.id===id);
    if(people){
      return resolve(people)
    // }resolve(persons.find(item => item.id === id)), 1000);
  }else{
    return reject(Error("ID non esiste"));
  }},1000)
  
  
  });
}

fetchPersonById(2).then((person) => console.log(person));//output:{ id: 2, firstName: 'Maria', lastName: 'Verdi', age: 32 }

fetchPersonById(5).then((person) => console.log(person));//Error: ID non esiste