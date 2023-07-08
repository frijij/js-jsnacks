/* TESTO DELL'ESERCIZIO:

Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi
numeri contenuti nell'array, restituendolo come risultato. Utilizzare la funzione sommaNumeri per stampare
il risultato. L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri
vuole inserire (cioè N), e poi facendogli inserire questi N numeri all'utente stesso tramite apposito
prompt().

Milestone 2:
Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!

*/

// Milestone 1
let quantiNumeri = parseInt(prompt("Quanti numeri vuoi inserire?"));
const arrayNumeri = [];

    for (i = 1; i <= quantiNumeri; i++) {
        let numeroScelto = parseInt(prompt("Inserisci un numero: "));
        console.log(numeroScelto);
        arrayNumeri.push(numeroScelto);
    }

console.log("Ecco i tuoi numeri: " + arrayNumeri);
console.log("Hai scelto " + arrayNumeri.length + "numeri")
let sommaArray = sommaNumeri(arrayNumeri);
console.log("La somma dei tuoi numeri è: " + sommaArray);

// Milestone 2
// calcolo della media aritmetica dei numeri all'interno dell'array
let mediaArray = mediaAritmetica(arrayNumeri);
console.log("La media dei tuoi numeri è: " + mediaArray);

//--------------------------------FUNZIONI--------------------------------
function sommaNumeri(array) {
    let risultato = 0 
    for (i = 0; i < array.length; i++) {
        risultato += array[i];
    }
    return risultato;
}

function mediaAritmetica(array) {
    let media = sommaNumeri(array) / array.length;
    return media;
}


