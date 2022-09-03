'use strict';

const isObjectArray = require("../../lib/util/isObjectArray");

let item = [{}];
console.log(isObjectArray(item)); // returns true

item = [{ id: 1, name: "Aaron" }, { id: 1, age: 30 }];
console.log(isObjectArray(item)); // returns true

item = [{}, "hello", 40];
console.log(isObjectArray(item)); // returns false

item = "Hello";
console.log(isObjectArray(item)); // returns false

item = 40;
console.log(isObjectArray(item)); // returns false

item = [];
console.log(isObjectArray(item)); // returns false