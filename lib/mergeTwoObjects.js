"use strict";

/**
 * 
 * @param {object} obj1 non-null non-array non-undefined object
 * @param {object} obj2 non-null non-array non-undefined object
 * @returns {object} merged object
 * @description
 * 
 * @example
 * 
 * 
 * //Example 1:
 * 
 * let obj1 = {name: "John", age: 20}
 * let obj2 = {name: "Doe", age: 30}
 * mergeTwoObjects(obj1, obj2)
 * 
 * //returns
 * 
 * {
 *   name: ["John", "Doe"],
 *   age: [20, 30]
 * }
 * 
 * 
 * //Example 2:
 *  
 * let obj1 = {name: "John", age: 20}
 * let obj2 = {address: "123 Main Street, NY, USA", phone: "+1-124552 124523"}
 * mergeTwoObjects(obj1, obj2)
 * 
 * //returns 
 * 
 * {
 *   name: ["John"],
 *   age: [20],
 *   address: ["123 Main Street, NY, USA"],
 *   phone: ["+1-124552 124523"]
 * }
 * 
 * 
 */
const mergeTwoObjects = (obj1, obj2) => {
  for (let i in obj2) {
    let oldValue = obj1[i];
    let newValue = obj2[i];
    try {
      obj1[i].push(newValue);
    } catch (e) {
      obj1[i] = oldValue != undefined ? [oldValue, newValue] : [newValue];
    }
  }
  return obj1;
}


module.exports = mergeTwoObjects;