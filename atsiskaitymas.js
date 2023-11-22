"use strict";

// 1.

// function hello(){
//     return "sveikinimas";
// }
// let pasisveikinimas = hello();
// console.log(pasisveikinimas)
// function greetings(vardas, pas){
//     console.log(${vardas} ${pas})
// }
// greetings('Kestutis', pasisveikinimas)
// greetings('Evelina', pasisveikinimas)

// 2.

// function skaiciaiTekstas(num1, num2) {
//   if (num1 > num2) {
//     console.log("pirmas skaicius didesnis");
//   } else if (num1 == num2) {
//     const suma = num1 + num2;
//     console.log(suma);
//   } else {
//     console.log("antras skaicius didesnis");
//   }
// }
// skaiciaiTekstas(1, 2);
// skaiciaiTekstas(2, 1);
// skaiciaiTekstas(2, 2);

// 3.

// function fizzAndBuzz(string) {
//   if (string === "fizz") {
//     console.log("buzz");
//   } else if (string === "buzz") {
//     console.log("fizz");
//   } else {
//     console.log("Please provide fizz or buzz");
//   }
// }

// fizzAndBuzz("fizz");
// fizzAndBuzz("buzz");
// fizzAndBuzz("miauw");

// 4.

// function trikampis(a, b, c) {
//   if (a + b > c && b + c > a && a + c > b) {
//     console.log("trikampis gali buti sudarytas");
//   } else {
//     console.log("trikampis negali buti sudarytas");
//   }
// }
// trikampis(4, 7, 9);

// 5.

// function plotoSkaiciuokle(kokiaFigura) {
//   let plotas;

//   if (kokiaFigura === "kvadratas") {
//     const krastine = prompt("Iveskite kvadrato krastines ilgi: ");
//     plotas = krastine * krastine;
//   } else if (kokiaFigura === "staciakampis") {
//     const krastineA = prompt("Iveskite staciakampis apatines krastines ilgi: ");
//     const krastineB = prompt("Iveskite staciakampis sonines krastines ilgi: ");
//     plotas = krastineA * krastineB;
//   } else {
//     alert("neteisingas ivedimas");
//     return;
//   }

//   alert("plotas: " + plotas);
//   return plotas;
// }
// plotoSkaiciuokle("kvadratas");
// plotoSkaiciuokle("staciakampis");

// 6.

// KLAIDOS: 1) bloga ekspresija: condition ? expr1 : expr2; 2) vienas "lygu(=)"" zenklas yra priskirimas
// function isSeven(x) {
//   return x="7" ? false : true : false;}
// }

// gera:

// function isSeven(x) {
//   return x === "7" ? true : false;
// }
// console.log(isSeven("7"));
// console.log(isSeven("8"));

// 7.

// function isEqual(param1, param2) {
//   if (param1 === param2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEqual(1, true));
// console.log(isEqual(1, 1));

// 8.

// function trysDraugai(prob, prize, pay) {
//   if (prob * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(trysDraugai(2, 4, 8));

// 9.

// function minutesSekundes(minutes) {
//   const sekundemis = minutes * 60;
//   return sekundemis;
// }
// console.log(`${2} minute yra lygu ${minutesSekundes(2)} sekundziu`);

// 10.

// function calculator() {
//   const operator = prompt("Iveskite aritmetini veiksma (+, -, *, /)");
//   const num1 = parseFloat(prompt("Iveskite pirma skaiciu: "));
//   const num2 = parseFloat(prompt("Iveskite antra skaiciu: "));

//   if (operator === "+") {
//     const suma = num1 + num2;
//     alert(`${num1} + ${num2} = ${suma}`);
//   } else if (operator === "-") {
//     const suma = num1 - num2;
//     alert(`${num1} - ${num2} = ${suma}`);
//   } else if (operator === "*") {
//     const suma = num1 * num2;
//     alert(`${num1} * ${num2} = ${suma}`);
//   } else if (operator === "/") {
//     const suma = num1 / num2;
//     alert(`${num1} / ${num2} = ${suma}`);
//   } else {
//     alert("neteisinga ivestis");
//   }
// }

// calculator();
