'use strict';

const flattenArray = require("../../lib/util/flattenArray");

//Example 1:
let arr = [1, 2, [3, 4, 5]];
console.log(flattenArray(arr));

//Example 2:
arr = [[1, [2, 3]], 4, 5];
console.log(flattenArray(arr));