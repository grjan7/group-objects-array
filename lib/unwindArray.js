"use strict";
/**
 * 
 * @param {array} arr an array object
 * @returns {any} only the first item if the total items in the array is one.
 * @description If the items in the array is one returns the item, otherwise returns the entire array.
 * 
 * @example 
 * 
 * let arr = ["a", "b"];
 * unwindArray(arr); 
 * // returns ["a", "b"]
 * 
 * let arr = [{name:"John", age:30}];
 * unwindArray(arr); 
 * // returns {name:"John", age:30}
 * 
 * let arr = ["a"];
 * unwindArray(arr);
 * // returns "a"
 * 
 * let arr = [44];
 * unwindArray(arr);  
 * // returns 44
 * 
 * let arr = [['a', 'b']];
 * unwindArray(arr); 
 * // returns ['a', 'b']
 * 
 */
const unwindArray = (arr) => arr.length > 1 ? arr : arr[0];

module.exports = unwindArray;