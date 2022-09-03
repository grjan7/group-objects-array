"use strict";

const isObject = require("./isObject");

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