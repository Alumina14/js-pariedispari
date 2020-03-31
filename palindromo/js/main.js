// //Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.
// -


// verificare se la parola inserita è palindroma oppure no con una funzione
// attualmente non sto riuscendo con un campo input, provo con un prompt

var inputParola = prompt("Inserisci una parola");
var inputParolaInv, msg;
function reverseString(inputParola) {
    return inputParola.split("").reverse().join("");
}

inputParolaInv = reverseString(inputParola);

if (inputParola === inputParolaInv){
  msg = "La parola " + inputParola + " è palindroma";
}else{
  msg = "La parola " + inputParola + " non è palindroma";
}

document.getElementById('output').innerHTML = msg;
