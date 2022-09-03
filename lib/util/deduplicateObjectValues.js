"use strict";

const uniqueArray = require("./uniqueArray");
const unwindArray = require("./unwindArray");
const flattenArray = require("./flattenArray");

/**
 * 
 * @param {object} obj 
 * @returns {object} object with deduplicated array values 
 * @description Each value (array) of the given object is flattened, filtered for unique values 
 * and unwound.
 * 
 * @example
 * 
 * Example 1:
 * 
 * let obj = {
 *  id: [1, 1, 1],
 *  name: ["John"],
 *  age: [30],
 *  address: [
 *    {street: "123 Main Street", city: "NY", country: "USA"}, 
 *    {street: "123 Main Street", city: "NY", country: "USA"}
 *  ]
 * }
 * 
 * deduplicateObjectValues(obj);
 * 
 * //returns
 * 
 * {
 *  id: 1,
 *  name: "John",
 *  age: 30,
 *  address: {street: "123 Main Street", city: "NY", country: "USA"}
 * } 
 *  
 */

const deduplicateObjectValues = (obj) => {
  for (let i in obj) {
    let item = obj[i];
    if (Array.isArray(item)) {
      let flattenedArray = flattenArray(item);
      let uniqueItems = uniqueArray(flattenedArray);
      obj[i] = unwindArray(uniqueItems);
    }
  }
  return obj;
}

module.exports = deduplicateObjectValues;