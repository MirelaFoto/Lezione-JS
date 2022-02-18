function getKeys(obj) {
  let myArr = []
  for (let key in person) {
    myArr.push(key);
  }
  return myArr;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
//output
//[ 'firstName', 'lastName', 'age', 'city', 'job' ]