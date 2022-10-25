/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

const eleSquares = document.querySelector('.squares');

for (let num = 1; num <= 100; num++) {
	let numString = num;

	const eleSq = document.createElement('div');
	eleSq.classList.add('sq');
	// L'ORDINE DELLE CONDIZIONI E' IMPORTATNE
	if (num % 15 == 0) { // ((num % 5 == 0) && (num % 3 == 0))
		numString = num + ' - fizzbuzz';
		// eleSquares.innerHTML += `<div class="sq fizzbuzz">${numString}</div>`;
		eleSq.classList.add('fizzbuzz');
	} else if (num % 5 == 0) {
		numString = num + ' - buzz';
		// eleSquares.innerHTML += `<div class="sq buzz">${numString}</div>`;
		eleSq.classList.add('buzz');
	} else if (num % 3 == 0) {
		numString = num + ' - fizz';
		// eleSquares.innerHTML += `<div class="sq fizz">${numString}</div>`;
		eleSq.classList.add('fizz');
	} else {
		// eleSquares.innerHTML += `<div class="sq">${numString}</div>`;
	}

	eleSq.innerHTML = numString;
	// eleSquares.prepend(eleSq);
	eleSquares.append(eleSq);
	console.log(numString);

	eleSq.addEventListener('click', function () {
		// this.style.visibility = 'hidden';
		alert('cliccato');
	});
}
