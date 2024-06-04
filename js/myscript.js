let km = prompt("Inserire chilometri da percorrere");
let anni = parseInt(prompt("Inserire l'età"));
let prezzobiglietto

if (anni <= 18) {
    prezzobiglietto = (km * 0.21) - ((km * 0.21) * 20 / 100);
} 

if (anni > 18 && anni < 65) {
    prezzobiglietto = km * 0.21;
} 

if (anni >= 65) {
    prezzobiglietto = (km * 0.21) - ((km * 0.21) * 40 / 100);
}

console.log(prezzobiglietto)

document.getElementById("risultato").innerHTML = prezzobiglietto.toFixed(2)

