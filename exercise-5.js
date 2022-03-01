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

// code here


function fetchById(id,collection ,reject,delay ){
return new Promise((resolve)=>{
  setTimeout(()=>{
    const item= collection.find(item=>item.id===id);
    if (item){return resolve(item)}
    else{
      return reject()
    }
  }, delay)
})



}

function fetchPersonByID(id,persons){
  const reject =()=> Promise.reject("ID does not exist");
  return fetchById(id,persons,reject,1000);


}

function fetchJobById(id,jobs){
  const reject=()=> Promise.reject("Job does not exist");
  return fetchById(id,jobs,reject,500);


}

Promise.race([fetchPersonByID(2,persons),fetchJobById(4,jobs)])
.then((value)=>console.log(value))
.catch((e)=>console.log(e))