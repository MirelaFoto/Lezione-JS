const Person = {

  firstName: "",
  lastName: "",


  get firstName() {
    return this.firstName;
  },
  set firstName(name) {

    this.firstName = name;
  },


  get lastName() {
    return this._lastName;
  },
  set lastName(surname) {
    this.lastName = surname;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}
//creare due oggetti john e simon
const john = Object.create(Person, {
  firstName: {
    value: "John"
  },
  lastName: {
    value: "Doe"
  }
})
const simon = Object.create(Person, {
  firstName: {
    value: "Simon"
  },
  lastName: {
    value: "Collins"
  }
})



console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins