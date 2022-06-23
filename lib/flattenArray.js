"use strict";

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