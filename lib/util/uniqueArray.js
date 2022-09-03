"use strict";

const isItemInArray = require("./isItemInArray");

/**
 * 
 * @param {array} arr an array object
 * @returns {array} the array with duplicate values removed.
 * @description Returns an array of unique values from the given array. 
 * @example
 * 
 * let arr = ["a", "b", "c", "a", "c", "b"];
 * uniqueArray(arr);
 * // returns ["a", "b", "c"]
 * 
 * let arr = [40, 10, "hello", "world", 40, "hello"];
 * uniqueArray(arr);
 * // returns [40, 10, "hello", "world"]
 * 
 * let arr = [{name: "John", age: 30}, {name: "Doe", age: 29}, {name: "John", age: 30}, {name: "Michel", age: 21}];
 * uniqueArray(arr); 
 * // returns [{name: "John", age: 30}, {name: "Doe", age: 29}, {name: "Michel", age: 21}] 
 * 
 */

const uniqueArray = (arr) => {
  let uniqueItems = [];
  arr.forEach((item) => {
    if (!isItemInArray(uniqueItems, item)) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
}

module.exports = uniqueArray;