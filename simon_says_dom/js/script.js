/*
Esercizio di oggi: Simon Says

Descrizione:
- Visualizzare in pagina 5 numeri casuali. 
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono 
- e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

**Consigli del giorno:**

- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* JS Math-->JS Random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;*/

//Uso un (ciclo for)

function generateRandomNumbersArrayFor() {
    const numbers = [];
    for (let i = 0; numbers.length < 5; i++) {
        const newNumber = getRandomNumber(1, 100);
        if (!numbers.includes(newNumber)) {
            numbers.push(newNumber);
        }
    }
    return numbers;
}

//Genera i numeri
const randomNumbers = generateRandomNumbersArrayFor();

const numbersListEl = document.getElementById('numbers-list');
const answersFormEl = document.getElementById('answers-form');
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions');

//Come far visualizzare i numeri 
//Genero una lista per visualizzare i numeri

//Document createElement()
//Esempio
//Create a button:
/*
const btn = document.createElement("button");
btn.innerHTML = "Hello Button";
document.body.appendChild(btn);
*/
/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
**array.forEach(function(currentValue, index, arr), thisValue)**
*/
randomNumbers.forEach(number => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    numbersListEl.append(listItem);
});

//Imposto il timer di 30 secondi
let timeLeft = 30;
//setInterval
const timer = setInterval(() => {
    countdownEl.textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);}
});
