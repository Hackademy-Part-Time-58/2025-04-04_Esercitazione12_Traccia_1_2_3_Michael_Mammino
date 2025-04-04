// Traccia 1

// Crea due variabili i cui valori verranno scelti dall’utente (in input).
// Crea un programma che esegua i seguenti calcoli su quei due numeri:

// somma
// sottrazione
// moltiplicazione
// divisione
// In seguito in console stampa la frase “Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (tot), sottrazione(tot) ecc ecc“

var x;
x=prompt("assegna un valore x");
var y;
y=prompt("assegna un valore y");

x=Number(x);
y=Number(y);

var somma= x+y;
var sottrazione=x-y;
var moltiplicazione=x*y;
var divisione=x/y;

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma${somma}, sottrazione${sottrazione}, moltiplicazione${moltiplicazione}, divisione${divisione}`)

// Traccia 2
                            
// Dato il seguente array di string:
// var words = ['ragazzuoli', 'va', '?', ' ', 'ciao', 'come'];
// stampare su console la frase:
// ciao ragazzuoli come va?

var words = ['ragazzuoli', 'va', '?', ' ', 'ciao', 'come'];

console.log(words[4], words[0], words[5],words[1], words[2],);

// Traccia 3 EXTRA - Liberation Day
                            
// Dato il seguente array di prezzi medi delle sigarette importate negli USA rispettivamente da Cina, Europa, Vietnam, Taiwan fino al 2 aprile 2025:

// var cigarettePrices = [3.5, 7.0, 2.0, 4.5];

// e dato il seguente array di dazi doganali (in percentuale) applicati dagli USA sulle importazioni rispettivamente da Cina, Europa, Vietnam, Taiwan:

// var tariffs = [34, 20, 46, 32];

// scrivere un programma che calcoli i prezzi aggiornati delle sigarette importate e li inserisca in un nuovo array :D

var cigarettePrices = [3.5, 7.0, 2.0, 4.5];

var tariffs = [34, 20, 46, 32];

var updatePrices = [
    cigarettePrices[0]*tariffs[0]/100+cigarettePrices[0], 
cigarettePrices[1]*tariffs[1]/100+cigarettePrices[1], 
cigarettePrices[2]*tariffs[2]/100+cigarettePrices[2], 
cigarettePrices[3]*tariffs[3]/100+cigarettePrices[3]
];

console.log(`il prezzo delle sigarette importate da Cina, Europa, Vietnam, Taiwan fino al 2 aprile 2025 sono: Cina ${cigarettePrices[0]}, Europa ${cigarettePrices[1]}, Vietnam ${cigarettePrices[2]}, Taiwan ${cigarettePrices[3]}`)

console.log(`dazi doganali (in percentuale) applicati dagli USA sulle importazioni rispettivamente da Cina, Europa, Vietnam, Taiwan sono: Cina ${tariffs[0]}, Europa ${tariffs[1]}, Vietnam ${tariffs[2]}, Taiwan ${tariffs[3]}`)

console.log(`i prezzi aggiornati delle sigarette importate sono: Cina ${updatePrices[0]}, Europa ${updatePrices[1]}, Vietnam ${updatePrices[2]}, Taiwan ${updatePrices[3]}`);
