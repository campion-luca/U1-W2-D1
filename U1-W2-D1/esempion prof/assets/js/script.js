let myNumber = 30;
console.log(myNumber);
console.log(typeof myNumber);
document.write(myNumber);

document.getElementById('titolo').innerText = 'Hello World!';

let nome;
nome = 'Pippo';
console.log(nome);

// alert(nome);

myNumber = 15;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = 'Pluto';
console.log(myNumber);
console.log(typeof myNumber);

let myName = 'Mario';
let mySurname = 'Rossi';
let myAge = 30;

console.log(myName + ' ' + mySurname + ', di anni ' + myAge);

const course = 'FS0624';
console.log(course);

// course = 'FS0924';  // Verrà generato un errore perché non è possibile cambiare il valore di una costante
// console.log(course);

let number1 = 10;
let number2 = '10';

let verify1 = number1 == number2;
console.log('La verifica è ' + verify1);

let verify2 = number1 === number2;
console.log('La verifica è ' + verify2);

let verify3 = number1 == number2 && number1 === number2;
console.log('La verifica è ' + verify3);

let verify4 = number1 == number2 || number1 === number2;
console.log('La verifica è ' + verify4);

let verify5 = !(number1 == number2);
console.log('La verifica è ' + verify5);

let verify6 = number1 != number2;
console.log('La verifica è ' + verify6);

let verify7 = number1 !== number2;
console.log('La verifica è ' + verify7);

const verify8 =
	number1 === number2 ? 'La verifica è true' : 'La verifica è false';
console.log(verify8);

let age = 16;
let answer = age >= 18 ? 'maggiorenne' : 'minorenne';
document.getElementById('major').innerText = 'Sei ' + answer;
