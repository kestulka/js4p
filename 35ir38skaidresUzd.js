"use strict";

// 35 skaidre

// 1.

// function sudetis() {
//   const num1 = parseInt(prompt("Iveskite pirma skaiciu: "));
//   const num2 = parseInt(prompt("Iveskite antra skaiciu: "));

//   // validacija

//   // if (isNaN(num1) || isNaN(num2)) {
//   //   console.log("Įvesti netinkami skaičiai. Bandykite dar kartą.");
//   //   return;

//   const suma = num1 + num2;
//   console.log(alert(`skaiciaus ${num1} ir ${num2} suma yra lygi: ${suma}`));
// }

// sudetis();

// 2.

// function bySquare(num1) {
//   const square = console.log(num1 ** 2);
//   return square;
// }

// bySquare(4);

// // 3.

// function isPositive(num1) {
//   if (num1 > 0) {
//     console.log(`skaicius (${num1}) yra teigiamas`);
//   } else if (num1 === 0) {
//     console.log(`skaicius (${num1}) yra lygus nuliui`);
//   } else {
//     console.log(`skaicius (${num1}) yra neigiamas`);
//   }
// }

// isPositive(1);

// // 4.

// function sakinys(zodis1, zodis2, zodis3) {
//   console.log(`${zodis1} ${zodis2} ${zodis3}`);
// }
// sakinys("labas", "as", "kestutis");

// 5.

// function lyginisNelyginis() {
//   const num = parseInt(prompt("Iveskite ska0iciu: "));
//   if (num % 2 == 0) {
//     console.log(alert(`skaicius (${num}) yra lyginis`));
//   } else {
//     console.log(alert(`skaicius (${num}) yra nelyginis`));
//   }
// }
// lyginisNelyginis();

// 6.

// function skaiciuDalyba() {
//   const num1 = parseFloat(prompt("Iveskite pirma skaiciu: "));
//   const num2 = parseFloat(prompt("Iveskite antra skaiciu: "));
//   if (num1 % num2 === 0) {
//     alert("skaicius dalijasi be liekanos");
//   } else {
//     alert("skaicius turi liekana");
//   }
// }
// skaiciuDalyba();

// 7.

// function trijuMax(num1, num2, num3) {
//   console.log(Math.max(num1, num2, num3));
// }
// trijuMax(3, 4, 10);

// 8;

// function sudetis(num1, num2) {
//   const num3 = parseFloat(prompt("iveskite savo skaiciu: "));
//   const suma = num1 + num2 + num3;
//   console.log(`${num1} + ${num1} + ${num3} = ${suma}`);
// }

// sudetis(5, 5);

// 38 skaidre

// 1.

// function rootWholeNum(num1) {
//   const rootNum = Math.sqrt(num1);

//   if (Math.round(rootNum) !== rootNum) {
//     const flooredNum = Math.floor(rootNum);
//     console.log(flooredNum);
//   } else {
//     console.log(
//       `saknis istraukia is skaiciaus (${num1}) yra sveikas skaicius. Grazinamas sveikas skaicius (${rootNum})`,
//     );
//   }
// }
// rootWholeNum(16);

// ARBA

// 2.

// function randomWithInterval(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(randomWithInterval(5, 45));

// 3.

// function didziausias(num1, num2, num3) {
//   console.log(Math.max(num1, num2, num3));
// }
// didziausias(5, 10, 11);
