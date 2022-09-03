"use strict";

/**
 * 
 * @param {array} arr a two dimensional array
 * @returns {array} flattened one dimensional array
 * @description Converts a two dimensional array into an one dimensional array.
 * @example
 * 
 * Example 1:
 * 
 * let arr = [1, 2, [3, 4, 5]];
 * flattenArray(arr);
 * //returns 
 * [1, 2, 3, 4, 5]
 * 
 * Example 2:
 * 
 * let arr = [[1, [2, 3]], 4, 5];
 * flattenArray(arr)
 * //returns
 * [1, [2, 3], 4, 5]
 * 
 * 
 */

const flattenArray = (arr) => {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(item);
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
}

module.exports = flattenArray;