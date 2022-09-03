"use strict";
/**
 * 
 * @param {any} item 
 * @returns {boolean} true if the item is a non-array object
 * @description Validates if the item is an object but not an array/null/undefined.
 * 
 * @example
 * 
 * isObject("Hello") // returns false
 * 
 * isObject(40) // returns false
 * 
 * isObject({}) // returns true
 * 
 * isObject({name: "Rocky"}) // returns true
 * 
 * isObject([{}]) // returns false
 * 
 * isObject(["a"]) // returns false
 * 
 * isObject(null) // returns false
 * 
 * isObject(undefined) // returns false
 * 
 * isObject(false) // returns false
 * 
 */

const isObject = (item) => (typeof item == 'object') && (item != null) && (item != undefined) && !(item instanceof Array);

module.exports = isObject;