const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {

  if (student != " ") {
    students.push(student);
  }
  return students;
}

//gli elementi di un array dichiarata con il variabile readonly si puo manipolare
//con push() nel questo caso per aggiungere in fondo 


addStudent("Marco");

console.log(students);