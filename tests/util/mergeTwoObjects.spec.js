'use strict';

const mergeTwoObjects = require("../../lib/util/mergeTwoObjects");

//Example 1:

let obj1 = { name: "John", age: 20 };
let obj2 = { name: "Doe", age: 30 };

console.log(mergeTwoObjects(obj1, obj2));

//Example 2:

obj1 = { name: "John", age: 20 };
obj2 = { address: "123 Main Street, NY, USA", phone: "+1-124552 124523" };
console.log(mergeTwoObjects(obj1, obj2));