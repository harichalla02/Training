/* Synchronous JavaScript
    JavaScript normally executes code one statement at a time. 
    Each statement runs in order one after another. 
    The next statement will not be executed until the current statement is completed. */

// EXAMPLE:1
// console.log(1);
// console.log(2);
// console.log(3);


//Example:2
// console.log('Venkatash');
// console.log('Mogili');
// calculate();
// console.log('JS Course');
// console.log('TS Course');

// function calculate() {
//     let sum = 0;

//     for (let i = 0; i < 1000000000; i++) {
//         sum += i;
//     }

//     console.log('Math result ', sum);
// }




/* Asynchronous JavaScript
    Asynchronous JavaScript is a programming technique that allows JavaScript to execute other tasks while waiting for 
    time-consuming operations, such as API calls, timers, or file operations etc....*/

// EXAMPLE:1
// const wait = (ms, callback) => {
// setTimeout(callback, ms);
// };
// console.log(1);
// wait(2000, () => console.log(2, "this executed after 2 seconds"));
// console.log(3);


//EXAMPLE:2
// console.log('Venkatash');
// console.log('Mogili');
// setTimeout(() => {
//     calculate();
// }, 1000);
// console.log('JS Course');
// console.log('TS Course');
// function calculate() {
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) {
//         sum += i;
//     }
//     console.log('Math result ', sum);
// }




/* Event Loop
    EventLoop is a mechanism that manages the execution of synchronous code and asynchronous operations. 
    It allows JavaScript to handle multiple tasks concurrently, even though it is single-threaded. 
    It checks whether the call stack is empty and then moves ready asynchronous callbacks 
    from the appropriate queues to the call stack for execution.*/

// EXAMPLE:1
// console.log("Start");
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);
// console.log("End");

/*  console.log("Start") executes immediately.
    setTimeout() schedules the callback to run after at least 2 seconds.
    console.log("End") executes immediately without waiting.    
    After the timer expires, the event loop allows the callback to execute and print "Hello" */

//EXAMPLE:2
// console.log("Start");
// setTimeout(() => {
//     console.log("First timer");
//     setTimeout(() => {
//         console.log("Third timer");
//     }, 0);
// }, 2000);
// setTimeout(() => {
//     console.log("Second timer");
// }, 1000);
// console.log("End");

/* here the third timer is nested inside the first timer, so it will only be scheduled after the first timer's callback is executed.
The second timer is scheduled to run after 1 second, so it will execute before the first timer's callback.  */




/* Callbacks
    A callback is a function passed as an argument to another function 
    so that it can be called later or at a particular point.*/

// EXAMPLE:1
// function fun1(callback){
//     setTimeout(() => {console.log("Task1"); }, 3000);
//     callback(); //Here callback() is the callback function.
// }
// function fun2(){
//     console.log("Task2");
//     console.log("Task3");
//     console.log("Task4");
//     console.log("Task5");
// }
// fun1(fun2);


// EXAMPLE:2
// function divideByHalf(sum) {
//     console.log(Math.floor(sum / 2));
// }
// function multiplyBy2(sum) {
//     console.log(sum * 2);
// }
// function operationOnSum(num1, num2, operation) {
//     var sum = num1 + num2;
//     operation(sum);  // Here operation is a callback function.
// }
// operationOnSum(3, 3, divideByHalf);
// operationOnSum(5, 5, multiplyBy2); 




/* Promises
    A Promise represents the eventual success or failure of an asynchronous operation.
    A Promise has three states:
        - Pending: The operation hasn't settled yet.
        - Fulfilled: The operation succeeded.
        - Rejected: The operation failed.
    It allows you to write asynchronous code in a more synchronous and readable manner.*/

// EXAMPLE:1
function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkdog = true;
            if (walkdog){
                resolve("You walk the Dog");
            }
            else{
                reject("You didn't walk the dog");
            }
        
    },1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchencleaned = true;
            if (kitchencleaned){
                resolve("you clean the kitchen");
            }
            else{
                reject("You didn't cleaned the Kitchen")
            }

    },2500);
    })
    
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeouttrash = true;
            if (takeouttrash){
                resolve("you take out the trash");
            }
            else{
                reject("You didn't take the trash out");
            }
    },500);
    })
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all chores")})
         .catch(error => console.error(error));


/* In JavaScript, .then() and .catch() are used to handle the result of a Promise.
    - .then() handles successful completion.
    - .catch() handles failure or rejection. */