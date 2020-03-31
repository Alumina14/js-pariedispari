//js
//L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

var numRand = Math.floor(Math.random() * 5) +1;
var numRand2 = Math.floor(Math.random() * 5) +1;
var pari, dispari, g1, g2, msg;

console.log(numRand);

var scelta = prompt("Scegli pari o dispari: ")

if (scelta == "Pari" || scelta == "pari") {
   document.getElementById('sceltag1').innerHTML = "Giocatore1 ha scelto pari!"
   document.getElementById('sceltag2').innerHTML = "Giocatore2 ha scelto dispari!"
 } else if (scelta == "Dispari" || scelta == "dispari") {
   document.getElementById('sceltag1').innerHTML = "Giocatore 1 ha scelto dispari!"
   document.getElementById('sceltag2').innerHTML = "Giocatore 2 ha scelto pari!"
 }

var numg1 = numRand;
var numg2 = numRand2;
var somma = numg1 + numg2;
document.getElementById('g1').innerHTML = "Numero giocatore 1: " + numg1;
document.getElementById('g2').innerHTML = "Numero giocatore 2: " + numg2;

if (somma % 2 == 0) {
  msg = somma + " Vince pari";
} else {
  msg = somma + " Vince dispari";
}

document.getElementById('risultato').innerHTML =msg;
