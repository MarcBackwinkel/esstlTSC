"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = "Hello Typescript";
printMessage(message);
let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));
let total = calc_1.sum(100, 200, 300);
console.log(`Total: ${total}`);
//install tsc-watch: npm install --save-dev tsc-watch@2.1.2
//npx tsc-watch --onsuccess "node dist/index.js"
//or
//add "start": "tsc-watch --onsuccess \"node dist/index.js\"" to package.json
//and start with "npm start"
