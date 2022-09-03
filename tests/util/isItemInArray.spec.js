'use strict';

const isItemInArray = require("../../lib/util/isItemInArray");

//Example 1:

let arr = ["a", "b", "c"];
console.log(isItemInArray(arr, "a")); // returns true

//Example 2:
arr = ["hello", "world"];
console.log(isItemInArray(arr, "Hello")); // returns false

//Example 3:
arr = [{ name: "John" }, "world"];
console.log(isItemInArray(arr, { name: "John" })); // returns true