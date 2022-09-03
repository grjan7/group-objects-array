"use strict";

const isObject = require("./isObject");

/**
 * 
 * @param {array} arr an array
 * @param {any} item 
 * @returns {boolean} true if the item is in the array.
 * @description Validates if the item is in the array. If exists return true, else false.
 * 
 * @example
 * 
 * Example 1:
 * 
 * let arr = ["a", "b", "c"];
 * isItemInArray(arr, "a"); // returns true 
 * 
 * Example 2:
 * 
 * let arr = ["hello", "world"];
 * isItemInArray(arr, "Hello"); // returns false
 * 
 * Example 3:
 * 
 * let arr = [{name: "John"}, "world"];
 * isItemInArray(arr, {name: "John"}); // returns true
 * 
 */

const isItemInArray = (arr, item) => {
  for (let i in arr) {
    let arrayItem = arr[i];
    let itemInArray = isObject(arrayItem) ? Object.entries(arrayItem).toString() : arrayItem;
    let itemToBeCompared = isObject(item) ? Object.entries(item).toString() : item;
    if (itemInArray == itemToBeCompared) {
      return true;
    }
  }
  return false;
}

module.exports = isItemInArray;