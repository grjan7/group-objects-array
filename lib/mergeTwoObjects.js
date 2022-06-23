"use strict";

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