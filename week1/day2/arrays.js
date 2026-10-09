/*  map() : Transform every element
    if you want perform operation on every element of an array map will do the things. */

let arr1 = [10, 15, 20, 25, 30];
let res1 = arr1.map(n => n*2);
console.log(res1)
let res2 = res1.map(n => n/5);
console.log(res2);

//--------------------------------------------------------------------------------------------------

/*  filter() : Select matching elements 
    If you wnat select some items from an array based on condition use filter() method. */
    
const result = res1.filter(n => n > 20);
console.log(result);
const result1 = res2.filter(n => n%2 === 0);
console.log(result1); 

//----------------------------------------------------------------------------------------------------

/*  reduce() — Combine values into one result
    it will sum up the values/elements of the array into single value */

let numbers = [10,20,30,40,50,60]
const result2 = numbers.reduce(
    (sum, n) => sum + n, 0
);
console.log(result2);

//-----------------------------------------------------------------------------------------------------

/*  find() — Find the first matching element
    it will return the first element that matches the condition or undefined if none matches. */

const result3 = numbers.find(n => n > 20);
console.log(result3);
console.log(numbers.find(n => n >= 20));

//-----------------------------------------------------------------------------------------------------

/*  some() — Check whether at least one element matches the condition
    it will return true if at least one element matches the condition, otherwise false. */

console.log(numbers.some(n => n > 60));

//-----------------------------------------------------------------------------------------------------

/*  every() — Check whether all the elements satisfy the condition
    it will return true if all elements match the condition, otherwise false. */

console.log(numbers.every(n => n > 5));

//-----------------------------------------------------------------------------------------------------

/*  sort() method sorts an array. By default, JavaScript sorts values as strings, 
    so numbers often need a comparator. */

// Ascending order
let arr2 = [10, 5, 20, 15, 30];
arr2.sort((a,b) => (a - b));
console.log(arr2)

// Descending order
arr3 = [10, 5, 20, 15, 30, 25];
arr3.sort((a,b) => (b - a));
console.log(arr3);

// Sort strings
const names = ["Ravi", "Tony", "Amit"];
names.sort();
console.log(names);
