"use strict";

const isObject = (item) => (typeof item == 'object') && (item != null) && (item != undefined) && !(item instanceof Array);

module.exports = isObject;