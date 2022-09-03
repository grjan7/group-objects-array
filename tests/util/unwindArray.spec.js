'use strict';

const unwindArray = require("../../lib/util/unwindArray");

let arr = ["a", "b"];
console.log(unwindArray(arr));

arr = [{ name: "John", age: 30 }];
console.log(unwindArray(arr));

arr = ["a"];
console.log(unwindArray(arr));

arr = [44];
console.log(unwindArray(arr));

arr = [['a', 'b']];
console.log(unwindArray(arr));
