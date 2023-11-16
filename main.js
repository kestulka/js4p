// 1.

let result;

function averageOfGrades(grade1, grade2, grade3) {
  result = (grade1 + grade2 + grade3) / 3;
  console.log(
    "skaiciu " +
      grade1 +
      ", " +
      grade2 +
      ", " +
      grade3 +
      ", " +
      "vidurkis yra: " +
      result.toFixed(2),
  );
}

// 2.

function stipendija() {
  if (result >= 7) {
    console.log("jus pretenduojate i stipendija");
  } else {
    console.log("apgailestaujame, stipendijos jus negausite");
  }
}

averageOfGrades(5, 8, 6);
stipendija();

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
