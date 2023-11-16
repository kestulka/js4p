"use strict";

import { masyvas } from "./script2.js";
console.log(masyvas);

import { sudetis } from "./script2.js";
console.log(sudetis(10));

import favFood from "./script2.js";
console.log(favFood);

import { isStr } from "./script2.js";
console.log(isStr("miaumiau"));
console.log(isStr(123));
console.log(isStr(false));

import { start, end, total } from "./script2.js";
console.log("funkcija uztruko: " + total + "milisekundziu");

labas();

function labas() {
	console.log("pasisveikinimas");
}
console.log(typeof labas);
