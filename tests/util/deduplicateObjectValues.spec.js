'use strict';

const deduplicateObjectValues = require("../../lib/util/deduplicateObjectValues");

let obj = {
  id: [1, 1, 1],
  name: ["John"],
  age: [30],
  address: [
    { street: "123 Main Street", city: "NY", country: "USA" },
    { street: "123 Main Street", city: "NY", country: "USA" }
  ]
}

console.log(deduplicateObjectValues(obj));
