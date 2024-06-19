/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype di JavaScript sono : ( primitive data types )*/
/* string , indica che ciò che c'è li sono parole, testo  ( "" ) */
/* number , indica che ciò che c'è li è un numero */
/* boolean , ha solo due possibilità o "true" o "false" in base a ciò che chiediamo */
/* null , segna che quel "contenitore" è intenzionalmente è vuoto, senza un valore */
/* undefined , indica che quel "contenitore" ancora non ha un valore, ne 0 ne 1 che lo acquisterà successivamente */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Luca";
console.log("========Esercizio 2==========");
console.log(typeof (myName));


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12;
let num2 = 20;
let numSomma = num1 + num2;
console.log("========Esercizio 3==========");
console.log(numSomma);

/* oppure */
let sum = 12 + 20
console.log(sum);

/* oppure
  let num2 = num1 + num2;
  console.log(num2);  */

/* oppure */
console.log(num1 + num2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("========Esercizio 4==========");
console.log(x);

/* oppure
let x;
x = 12; */


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Campion";
console.log("========Esercizio 5==========");
console.log(myName);
/* continua */
const myConst = "giusto";
console.log(myConst);;
/* myConst = "errato" ; genera errore */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 12 - x;
/* oppure */
{
  let num3 = 4;
  let numSomma = x - num3;
  console.log("========Esercizio 6==========");
  console.log(numSomma);
} /* le grafe sono una cosa a se', non l'avessi messa darebbe errore in quanto numSomma è già assegnata */


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
const verify = name1 !== name2 ? "diverso" : "uguale";
console.log("========Esercizio 7==========");
console.log(verify);

/* parte 2 */

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
const verify2 = name1 !== name2 ? "diverso" : "uguale";
console.log(verify2);