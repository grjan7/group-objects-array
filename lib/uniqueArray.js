"use strict";

const isItemInArray = require("./isItemInArray");

const uniqueArray = (arr) => {
  let uniqueItems = [];
  arr.forEach((item) => {
    if (!isItemInArray(uniqueItems, item)) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
}

module.exports = uniqueArray;