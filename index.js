"use strict";

const deduplicateObjectValues = require("./lib/deduplicateObjectValues");
const flattenArray = require("./lib/flattenArray");
const groupObjectArrayByKey = require("./lib/groupObjectArrayByKey");
const isItemInArray = require("./lib/isItemInArray");
const isObject = require("./lib/isObject");
const isObjectArray = require("./lib/isObjectArray");
const mergeTwoObjects = require("./lib/mergeTwoObjects");
const uniqueArray = require("./lib/uniqueArray");
const unwindArray = require("./lib/unwindArray");


module.exports = {
  deduplicateObjectValues,
  flattenArray,
  groupObjectArrayByKey,
  isItemInArray,
  isObject,
  isObjectArray,
  mergeTwoObjects,
  uniqueArray,
  unwindArray
}