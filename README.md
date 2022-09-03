# group-objects-array
Groups JavaScript objects array by a key and returns grouped array.

## Example:

```js
  
 let objArray = [
  {id: 1, name: "John"},
  {id: 2, name: "Aaron"},
  {id: 1, age: 20},
  {id: 2, age: 30},
  {id: 3, name: "Michel"},
  {id: 1, address: {street: "123 Main Street", city: "NY", country: "USA"}}
  {id: 3, contact: "+01-51245 53125"},
  {id: 3, contact: "+02-51245 53125"},
  {id: 1, address: {street: "123 Main Street", city: "NY", country: "USA"}}  
 ];
  
 groupObjectArrayByKey(objArray, "id");
  
 //returns
 
 [
 {id: 1, name: "John", age: 20, address: {street: "123 Main Street", city: "NY", country: "USA"}},
 {id: 2, name: "Aaron", age: 30},
 {id: 3, name: "Michel", contact: ["+01-51245 53125", "+02-51245 53125"]}
 ]

 ```
