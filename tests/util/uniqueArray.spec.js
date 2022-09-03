'use strict';

const uniqueArray = require("../../lib/util/uniqueArray");

let arr = ["a", "b", "c", "a", "c", "b"];
console.log(uniqueArray(arr));

arr = [40, 10, "hello", "world", 40, "hello"];
console.log(uniqueArray(arr));

arr = [{ name: "John", age: 30 }, { name: "Doe", age: 29 }, { name: "John", age: 30 }, { name: "Michel", age: 21 }];
console.log(uniqueArray(arr));
