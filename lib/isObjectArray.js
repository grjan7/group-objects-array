"use strict";

const isObject = require("./isObject");

const isObjectArray = (objectArray) => Array.isArray(objectArray) && objectArray.length > 0 && objectArray.every((item) => isObject(item));

module.exports = isObjectArray;