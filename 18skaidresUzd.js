// 1,2 uzd:

function hello(vardas) {
  console.log(`Hello ${vardas}`);
}
hello("kestutis");
hello("ryan");

// 3uzd:

let vardas = "kestutis";
let amzius = 23;

function prabegoMetai() {
  amzius++;
  console.log(vardas);
  console.log(amzius);
}
prabegoMetai();
prabegoMetai();
prabegoMetai();

// 4uzd:

function fizzAndBuzz(string) {
  if (string === "fizz") {
    console.log("buzz");
  } else if (string === "buzz") {
    console.log("fizz");
  } else {
    console.log("Please provide fizz or buzz");
  }
}

fizzAndBuzz("fizz");
fizzAndBuzz("buzz");
fizzAndBuzz("miauw");

// 5uzd:

function smallestNum(num1, num2, num3) {
  console.log(Math.min(num1, num2, num3));
}
smallestNum(6, 13, 5.99);

// 6uzd:

function averageNum(num1, num2, num3) {
  const average = (num1 + num2 + num3) / 3;
  console.log(average.toFixed(2)); // toFixed grazina string
}
averageNum(11, 13, 26);

// 7 uzd:

function upByOne(num) {
  const result = ++num; // jei pliusus detume gale, mes console loge nematytume pridetos vertes, bet ji butu prideta
  console.log(result);
}

upByOne(3);
upByOne(6);
upByOne(10);
