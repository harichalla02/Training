// Destructuring extracts values from arrays or properties from objects into variables.

// Array destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue


// Object destructuring
const student = {
    name: "Tony",
    age: 27,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);   // Tony
console.log(age);    // 27
console.log(course); // JavaScript


let {person = "Hari", age1 = 25} = {}
console.log(person)
console.log(age)