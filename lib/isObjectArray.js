"use strict";

const isObject = require("./isObject");


/**
 * 
 * @param {any} item 
 * @returns {boolean} true if every item of the input , else false
 * @description Validates if the input is an array and all its values are an object.
 * @example
 * 
 * let item = [{}];
 * isObjectArray(item); // returns true
 * 
 * let item = [{id:1, name:"Aaron"}, {id:1, age: 30}];
 * isObjectArray(item); // returns true
 * 
 * let item = [{}, "hello", 40]
 * isObjectArray(item); // returns false
 * 
 * let item = "Hello"
 * isObjectArray(item); // returns false
 * 
 * let item = 40;
 * isObjectArray(item); // returns false
 *
 * let item = [];
 * isObjectArray(item); // returns false  
 * 
 */

const isObjectArray = (item) => Array.isArray(item) && item.length > 0 && item.every((it) => isObject(it));

module.exports = isObjectArray;