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
  return new Promise((resolve,reject)=>{
    const person= persons.find(item=>item.id===id);
    if(person){
      resolve(person)
    }else{
      reject(new Error("Id non esiste!"))
    }
  });
}
fetchPersonById(2).then((value)=>console.log(value))
.catch((e)=>console.log(e))

//output { id: 2, firstName: 'Maria', lastName: 'Verdi', age: 32 }