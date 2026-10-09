//  Scope determines where a variable can be accessed.
  
let name = "Tony"; // declaring a variable in the global scope
function greet() {
    console.log(name);
}
greet(); // The variable name is accessible inside the function also, because it is declared globally.


function test() {
    let age = 27;
    console.log(age); // 27
}

test();
console.log(age); /* ReferenceError, because age variable declared 
                     with let inside a function cannot be accessed outside that function. */



if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(z); /*  30 var declared variable z is accessible 
                    outside the block because var has function scope, not block scope. */
console.log(x); /*ReferenceErrorbecause variable y declared 
                    with const inside a function cannot be accessed outside that function. */

console.log(y);  /* ReferenceError because variable x declared 
                    with let inside a function cannot be accessed outside that function. */
