// The spread operator (...) expands elements from an array or properties from an object.

// Copy an array
let a = [2,4,5];
let b = [...a];
console.log(b);


// Merge arrays
let c = [1,3,5,7];
let d= [2,4,6,8];
let result = `[ ${[...c,...d].join(", ")}]`;
console.log(result);


// Copy and update
let student = {
    name: "Tony",
    age: 27,
    course: "JavaScript"
};
let updated = { ...student, age: 28 };
console.log(updated);