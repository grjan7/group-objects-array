"use strict";

const unwindArray = (arr) => arr.length > 1 ? arr : arr[0];

module.exports = unwindArray;