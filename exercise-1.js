function canPlay() {
  if (true) {
    var personName = 'Paul'; // se cambio let in var funziona, siccome let ha funzione nel blocco dove e stato dicchiarato
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();

//soluzione 2

let personName = "Paul";

function canPlay() {
  if (true) {
    let personName = 'Paul';
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();