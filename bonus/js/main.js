var nome;
nome=prompt("inserisci il tuo nome");
console.log(nome);

var cognome;
cognome=prompt("inserisci il tuo cognome");
console.log(cognome);

var colore;
colore=prompt("inserisci il tuo colore preferito");
console.log(colore);

//inserisco una variante che generi numeri randomici da 1 a 20

var random_number
random_number=Math.floor(Math.random() * 21);

document.getElementById("generatedpassword").innerHTML=(nome + cognome + colore + random_number )

document.getElementById("congraturations").innerHTML= "Complimenti! Hai generato una password sicura! al 3% : ";
 
