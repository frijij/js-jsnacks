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
//chiedere all'utente quanti numeri vuole inserire = prompt quantiNumeri
let quantiNumeri = parseInt(prompt("Quanti numeri vuoi inserire?"));
let arrayNumeri = [];

// chiedere in un prompt di inserire tanti numeri quanti ne ha scelti l'utente
// - creare ciclo for con i < di quantiNumeri
for (i = 1; i <= quantiNumeri; i++) {

    let numeroScelto = parseInt(prompt("Inserisci un numero: "));
    console.log(numeroScelto);
    // - inserire i numeri in un array
    arrayNumeri.push(numeroScelto);
    console.log(arrayNumeri);
}

//Creare funzione sommaNumeri con argomento array
// - Inserire array vuoto
// - definire somma di n numeri dentro l'array e restituirla come risultato

//Stamapare il risultato in console

/*function searchInArray(array, elementToSearch) {

    // PASSO 2: Scansiono tutta la lista degli invitati
    for (let i = 0; i < array.length; i++) {
        // Ad ogni giro se il nome inserito è identico a quello scansionato allora dico
        // che puoi entrare
        if (elementToSearch == array[i]) {
            return true;
        }
    }

    return false;
}
*/


// Milestone 2

