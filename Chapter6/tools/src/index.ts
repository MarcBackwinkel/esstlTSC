import { sum } from "./calc";
let printMessage = (msg: string): void => console.log(`Message: ${msg}`);

let message = "Hello Typescript";
printMessage(message);

//tslint:disable-next-line no-debugger
debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);

//install tsc-watch: npm install --save-dev tsc-watch@2.1.2
//npx tsc-watch --onsuccess "node dist/index.js"
//or
//add "start": "tsc-watch --onsuccess \"node dist/index.js\"" to package.json
//and start with "npm start"