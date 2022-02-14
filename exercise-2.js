function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; // TypeError: Assignment to constant variable.,Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();