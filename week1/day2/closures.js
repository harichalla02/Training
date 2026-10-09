/* A closure happens when an inner function remembers variables from its outer function, 
   even after the outer function has finished executing.*/

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const result = outer();

// result(); // 1
// result(); // 2
// result(); // 3
/* In this example, the inner function has access to the count variable from its outer function, 
   even after outer() has finished executing. Each time result() is called, 
   it increments and logs the count variable, demonstrating the closure behavior. */



function outer(a)
{
    return function middle(b)
    {
        return function inner(c)
        {
            return a + b + c;
        }
    }
}
let result1 = outer(10)(20)(30);
console.log(result1);


const step1 = outer(5);
const step2 = step1(15);
const finalResult = step2(25);
console.log(finalResult);

/* Note : If a function returns another function, the variable receiving returned value 
   can be used to call the inner function and access the variables of the outer function. */





// function outer(a) {
//     function inner(b) {
//         return a + b;
//     }
//     return inner;
// }

// const result2 = outer(10);
// console.log(result2(20)); 