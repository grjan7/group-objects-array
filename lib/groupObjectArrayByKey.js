'use strict';

const isObjectArray = require("./isObjectArray");
const mergeTwoObjects = require("./mergeTwoObjects");
const deduplicateObjectValues = require("./deduplicateObjectValues");

/**
 * 
 * @param {object[]} objArr an array of objects to be grouped
 * @param {string} groupByKey an object key to group the objects     
 * @returns {object[]} grouped object array based on the groupByKey provided.
 * @description Groups the scattered objects in an array based on a groupByKey (e.g. id). For the given groupByKey value, if there is a multiple occurrence of same key (e.g., contact key for id:3) but with unique values, then the values will be grouped into an array.
 * 
 * @example
 * 
 * Example 1:
 * 
 * let objArray = [
 *  {id: 1, name: "John"},
 *  {id: 2, name: "Aaron"},
 *  {id: 1, age: 20},
 *  {id: 2, age: 30},
 *  {id: 3, name: "Michel"},
 *  {id: 1, address: {street: "123 Main Street", city: "NY", country: "USA"}}
 *  {id: 3, contact: "+01-51245 53125"},
 *  {id: 3, contact: "+02-51245 53125"},
 *  {id: 1, address: {street: "123 Main Street", city: "NY", country: "USA"}}  
 * ];
 * 
 * groupObjectArrayByKey(objArray, "id");
 * 
 * //returns
 * 
 * [
 * {id: 1, name: "John", age: 20, address: {street: "123 Main Street", city: "NY", country: "USA"}},
 * {id: 2, name: "Aaron", age: 30},
 * {id: 3, name: "Michel", contact: ["+01-51245 53125", "+02-51245 53125"]}
 * ] 
 * 
 */
const groupObjectArrayByKey = (objArr, groupByKey) => {

  //sanitize input
  if (!objArr) {
    throw new Error("objArr and groupByKey are missing.")
  }
  if (!isObjectArray(objArr)) {
    throw new Error("The objArr must be an array of objects.");
  }
  if (!groupByKey) {
    throw new Error(`groupByKey is missing.`);
  }
  if (typeof groupByKey != "string") {
    throw new Error("The groupByKey must be a string.");
  }

  let groupedObj = {};

  for (let i of objArr) {
    let key = i[groupByKey];
    let oldValue = groupedObj[key];
    let newValue = i;
    if (key) {
      groupedObj[key] = oldValue ? mergeTwoObjects(oldValue, newValue) : mergeTwoObjects({}, newValue);
    }
  }
  let groupedArr = Object.values(groupedObj).map((item) => deduplicateObjectValues(item));
  return groupedArr;
}

module.exports = groupObjectArrayByKey;

