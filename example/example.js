/*
 Example of importing the Tune API into your project.
 Run this file with Node.
 node example.js
*/

var Tune = require('../');

var tune = new Tune();

console.log("\nFrequencies of first 3 notes:")
console.log(tune.note(0))
console.log(tune.note(1))
console.log(tune.note(2))

tune.root = 220

console.log("\nIn the key of A:")
console.log(tune.note(0))
console.log(tune.note(1))
console.log(tune.note(2))

console.log("\nSome octaves:")
console.log(tune.note(0,-1))
console.log(tune.note(0,0))
console.log(tune.note(0,1))
