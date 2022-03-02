
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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];


function fetchById(id,collection ,resolve){
return new Promise((resolve,reject)=>{
    const item= collection.find(item=>item.id===id);
  if(item){
return resolve(item)}
    else{
      return reject("error")
    }
  
})
}

function fetchPersonByID(id,persons){
  const reject=()=> Promise.reject();
  return fetchById(id,persons);
}

function fetchJobById(id,jobs){
  const reject=()=> Promise.reject();
  return fetchById(id,jobs);


}

Promise.all([fetchPersonByID(3,persons),fetchJobById(2,jobs)])
.then((value)=>console.log(value))
.catch((e)=>console.error(e))