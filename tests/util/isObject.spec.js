'use strict';

const isObject = require("../../lib/util/isObject");

console.log(isObject("Hello")); // returns false
console.log(isObject(40)); // returns false
console.log(isObject({})); // returns true
console.log(isObject({ name: "Rocky" })); // returns true
console.log(isObject([{}])); // returns false
console.log(isObject(["a"])); // returns false
console.log(isObject(null)); // returns false
console.log(isObject(undefined)); // returns false
console.log(isObject(false)); // returns false