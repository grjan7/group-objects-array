'use strict';

const isObjectArray = require("./isObjectArray");
const mergeTwoObjects = require("./mergeTwoObjects");
const deduplicateObjectValues = require("./deduplicateObjectValues")

const groupObjectArrayByKey = (objArr, groupKey) => {

  //sanitize input
  if (!objArr) {
    throw new Error("objArr and groupKey are missing")
  }
  if (!isObjectArray(objArr)) {
    throw new Error("The objArr must be an array of objects.");
  }
  if (!groupKey) {
    throw new Error(`groupKey is missing.`);
  }
  if (typeof groupKey != "string") {
    throw new Error("The groupKey must be a string.");
  }

  let groupedObj = {};

  for (let i of objArr) {
    let key = i[groupKey];
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

