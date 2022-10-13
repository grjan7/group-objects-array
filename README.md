# group-objects-array

[![NPM version](https://img.shields.io/npm/v/group-objects-array.svg)](https://www.npmjs.com/package/group-objects-array)
[![NPM downloads](https://img.shields.io/npm/dm/group-objects-array.svg)](https://www.npmjs.com/package/group-objects-array)
[![Known Vulnerabilities](https://snyk.io/test/github/grjan7/group-objects-array/badge.svg)](https://snyk.io/test/github/grjan7/group-objects-array)

## Description

  > Groups JavaScript objects array by a key and returns grouped array.

  > Groups the scattered objects in an array based on a `groupByKey` (e.g. id). For the given `groupByKey` value, if there is a multiple occurrence of same key (e.g., contact key for id: 3) but with unique values, then the values will be grouped into an array.

## Installation

```sh

  npm i group-objects-array

```

## Usage

### `groupObjectArrayByKey(objArr, groupByKey)`

- **objArr** an array of objects to be grouped
- **groupByKey** an object key to group the objects

```js

 const { groupObjectArrayByKey } = require('group-objects-array');
 
 const objArray = [
   { id: 1, name: "John" },
   { id: 2, name: "Aaron" },
   { id: 1, age: 20 },
   { id: 2, age: 30 },
   { id: 3, name: "Michel" },
   { id: 1, address: { street: "123 Main Street", city: "NY", country: "USA" } },
   { id: 3, contact: "+01-51245 53125" },
   { id: 3, contact: "+02-51245 53125" },
   { id: 1, address: { street: "123 Main Street", city: "NY", country: "USA" } }  
 ];
  
 groupObjectArrayByKey(objArray, "id");
 
 ```

 returns

 ```js
 [
   {
     id: 1, 
     name: "John", 
     age: 20, 
     address: { street: "123 Main Street", city: "NY", country: "USA" }
   },
   {
     id: 2,
     name: "Aaron",
     age: 30
   },
   {
     id: 3,
     name: "Michel",
     contact: [ "+01-51245 53125", "+02-51245 53125" ]
   } 
 ]

 ```

### `uniqueArray(arr)`

This function returns an array with duplicates removed.

- **arr** an array to be deduplicated to have only unique values

```js

const { uniqueArray } = require("group-objects-array");

const arr = [
  { name: "John", age: 30 },
  { name: "Doe", age: 29 },
  { name: "John", age: 30 },
  { name: "Michel", age: 21 }
];

uniqueArray(arr);

```

returns

```js

[
  { name: "John", age: 30 },
  { name: "Doe", age: 29 },
  { name: "Michel", age: 21 }
]

```

### `isItemInArray(arr, item)`

This function checks if an item is in the given array.

- **arr** source array
- **item** item to be checked whether it is in the array  

```js

const { isItemInArray } = require("group-objects-array");

const arr = [ { name: "John" }, "world" ];

isItemInArray(arr, { name: "John" }); // returns true

```