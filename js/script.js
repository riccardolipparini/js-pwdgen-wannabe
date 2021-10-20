// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina “La password assegnata è:

let name = prompt("Qual'è il tuo nome?")
console.log(name)

let cognome = prompt("Qual'è il tuo cognome?")
console.log(cognome)

let colore = prompt("Qual'è il tuo colore preferito?")
console.log(colore)

let number = 21
console.log(number)

document.getElementById("personalpassword").innerHTML = `la tua password personale sarà ${(name)}`
