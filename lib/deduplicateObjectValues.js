"use strict";

const uniqueArray = require("./uniqueArray");
const unwindArray = require("./unwindArray");
const flattenArray = require("./flattenArray");

const deduplicateObjectValues = (obj) => {
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      let flattenedArray = flattenArray(obj[i]);
      let uniqueItems = uniqueArray(flattenedArray);
      obj[i] = unwindArray(uniqueItems);
    }
  }
  return obj;
}

module.exports = deduplicateObjectValues;