"use strict";

const groupObjectArrayByKey = require("./lib/groupObjectArrayByKey");
const isItemInArray = require("./lib/util/isItemInArray");
const isObject = require("./lib/util/isObject");
const isObjectArray = require("./lib/util/isObjectArray");
const uniqueArray = require("./lib/util/uniqueArray");

module.exports = {
  groupObjectArrayByKey,
  isItemInArray,
  isObject,
  isObjectArray,
  uniqueArray
}