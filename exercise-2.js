function nicknameMap(persons) {
  let myArray = persons.map(persons => `${persons.name}-${persons.age}`)
  return myArray;
}

const persons = [{
    name: 'Paul',
    age: 16
  },
  {
    name: 'George',
    age: 17
  },
  {
    name: 'Lucas',
    age: 21
  },
  {
    name: 'Marco',
    age: 32
  },
  {
    name: 'Peter',
    age: 18
  },
  {
    name: 'Carl',
    age: 13
  },
  {
    name: 'Simon',
    age: 24
  },
  {
    name: 'Mark',
    age: 15
  },
  {
    name: 'Sandra',
    age: 34
  },
  {
    name: 'Alice',
    age: 28
  }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log("oggetto di nicknames: ", nicknames);
/*output
oggetto di nicknames:  [
  'Paul-16',   'George-17',
  'Lucas-21',  'Marco-32',
  'Peter-18',  'Carl-13',
  'Simon-24',  'Mark-15',
  'Sandra-34', 'Alice-28'
]*/