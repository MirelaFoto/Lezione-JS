function getKeys(obj) {
  let myObj = []


  myObj.push(Object.values(person))
  return myObj;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = "Solo i valori dell'oggetto  :\n " + getKeys(person);
console.log(keys); // risultato Solo i valori dell'oggetto (senza keys) :
//John,Doe,32,Rome,Developer