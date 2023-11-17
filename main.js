// 1.

// let result;

// function averageOfGrades(grade1, grade2, grade3) {
//   result = (grade1 + grade2 + grade3) / 3;
//   console.log(
//     "skaiciu " +
//       grade1 +
//       ", " +
//       grade2 +
//       ", " +
//       grade3 +
//       ", " +
//       "vidurkis yra: " +
//       result.toFixed(2),
//   );
// }

// 2.

// function stipendija() {
//   if (result >= 7) {
//     console.log("jus pretenduojate i stipendija");
//   } else {
//     console.log("apgailestaujame, stipendijos jus negausite");
//   }
// }

// averageOfGrades(5, 8, 6);
// stipendija();

// budas su callback funkcija:

// function averageOfGrades(grade1, grade2, grade3, callback) {
//   const result = (grade1 + grade2 + grade3) / 3;
//   console.log(
//     "skaiciu " +
//       grade1 +
//       ", " +
//       grade2 +
//       ", " +
//       grade3 +
//       ", " +
//       "vidurkis yra: " +
//       result.toFixed(2),
//   );
//   callback(result);
// }

// function stipendija(result) {
//   if (result >= 7) {
//     console.log("jus pretenduojate i stipendija");
//   } else {
//     console.log("apgailestaujame, stipendijos jus negausite");
//   }
// }

// averageOfGrades(5, 8, 6, stipendija);

// 3

// function vardas() {
//   const ivestis = prompt("Iveskite savo varda: ");
//   console.log(`sveiki ${ivestis}`);
//   return ivestis;
// }
// const name = vardas(); // issaugojam vartotojo ivesti i kintamaji name

// 4.

// let kartas = 0;

// function pasisveikinimas(ivestis) {
//   kartas++;
//   console.log(
//     `sveiki, ${ivestis}. Prie puslapio jus prisijungete ${kartas} kartu`,
//   );
// }

// pasisveikinimas(name);
// pasisveikinimas(name); // -- paklausti --

// 5.

// function metinisAtlyginimas() {
//   const vardas = prompt("Iveskite savo varda: ");
//   const atlyginimoIvestis = prompt(
//     "Iveskite savo menesini atlyginima skaiciais: ",
//   );
//   const menesinis = parseFloat(atlyginimoIvestis);
//   const metinis = menesinis * 12;
//   console.log(
//     `Labas, ${vardas}. Jus per menesi uzdirbate ${atlyginimoIvestis}€, reiskia per metus jus uzdirbsite: ${metinis}€`,
//   );
// }

// metinisAtlyginimas();

// 6.

// mano bandyta velniava:

// function kelione(km, litroKaina) {
//   const kuroSanaudosIvestis = prompt(
//     "Iveskite kiek jusu automobilis sunaudoja kuro per 100km: ",
//   );
//   const kelionesIlgis = prompt("Iveskite kilometru norite nuvaziuoti: ");
//   const kuroTipas = prompt(
//     "Iveskite koki kuro tipa naudoja jusu automobilis: ",
//   );

//   const kokiosSanaudos = parseInt(kuroSanaudosIvestis);
//   const kiekKm = parseInt(kelionesIlgis);

//   let koksTipas;

//   if (kuroTipas === "benzinas") {
//     koksTipas = 1.56;
//   } else if (kuroTipas === "dyzelis") {
//     koksTipas = 1.89;
//   } else {
//     console.log("Iveskite teisinga kuro tipa: benzinas/dyzelis");
//     return;
//   }

//   const kaina = ((km * litroKaina) / 100) * koksTipas;
//   console.log(alert(`Kelionės kaina yra ${kaina.toFixed(2)}€.`));
// }
// kelione(100, 5);

// arba

function kelionesKaina(nuvaziuotiKilometrai, benzinoKaina) {
  const kuroSanaudos = 7;

  const sunaudotiLitrai = (nuvaziuotiKilometrai / 100) * kuroSanaudos;

  const kelionesKaina = sunaudotiLitrai * benzinoKaina;

  return kelionesKaina;
}

const nuvaziuotiKilometrai = 200;

const benzinoKaina = 1.5;

const bendraKaina = kelionesKaina(nuvaziuotiKilometrai, benzinoKaina);

console.log(`Keliones kaina yra ${bendraKaina}€.`);
