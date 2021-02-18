var nome;
nome=prompt("inserisci il tuo nome");
console.log(nome);

var cognome;
cognome=prompt("inserisci il tuo cognome");
console.log(cognome);

var colore;
colore=prompt("inserisci il tuo colore preferito");
console.log(colore);

const diciannove= 19

document.getElementById("generatedpassword").innerHTML=(nome + cognome + colore + diciannove)

document.getElementById("congraturations").innerHTML="Complimenti! Hai generato una password sicura! (al 3%) : " ;
