/*Write a function greetUser(name, callback) that prints the user's name and 
 then executes the callback to print "Welcome to JavaScript!".
 
 Expected output :
       Tony
       Welcome to JavaScript!*/

// function greetUser(name,callback){
//     console.log(name);
//     callback();
// }
// greetUser("Tony",() => console.log("Welcome to JavaScript!"));





/*Write a program that prints "Start", then prints "Hello" after 2 seconds, and finally prints "End".
Expected output:
    Start
    End
    Hello */

// console.log("Start");
// setTimeout(() => console.log("Hello"),2000);
// console.log("End")





/*Task 3 — Callback with calculation
Create a function calculate(num1, num2, callback) that adds two numbers and passes the result to a callback function.
Create two callback functions:
    - squareResult(sum) — prints the square of the sum.
    - doubleResult(sum) — prints twice the sum.
Expected output for calculate(3, 2, squareResult) and calculate(3, 2, doubleResult):
                25
                10 */

// function calculate(num1, num2, callback){
//     let sum = num1 + num2;
//     callback(sum);
// }
// function squareResult(sum){
//     console.log(sum*sum);
// }
// function doubleResult(sum){
//     console.log(sum*2);
// }
// calculate(3, 2, squareResult);
// calculate(3, 2, doubleResult);



/* Task 7 — Create a Promise
Create a function checkAge(age) that returns a Promise.
- If age >= 18, resolve with "Eligible to vote".
- Otherwise, reject with "Not eligible to vote".
Call it with 20 and 16, handling the result using .then() and .catch().*/

// function checkage(age){
//     return new Promise((resolve, reject) => {
//         if(age >= 18) {
//             resolve("Eligible to vote");
//         }
//         else{
//             reject("Not eligible to vote");
//         }
//     })
// }
// checkage(20).then(value => console.log(value))
//             .catch(error => console.log(error));
// checkage(16).then(value => console.log(value))
//             .catch(error => console.log(error));






/* Task 8 — Promise with a timer
Complete this program so that "Data loaded" is printed after 2 seconds.*/


// function loadData() {
//     return new Promise((resolve, reject) => {
//         // Write your code here.
//         const load = true;
//         setTimeout(() =>{
//             if(load) {
//                 resolve("Data Loaded");
//             }
//             else{
//                 reject("Rejected");
//             }
//         }, 2000);
//     }        
// )}

// loadData().then(value => {console.log(value)})
//           .catch(error => {console.error(error)});



/* Task 9 — Promise chaining
Create three functions:
- login() — resolves with "Login successful" after 1 second.
- fetchProfile() — resolves with "Profile loaded" after 2 seconds.
- fetchPosts() — resolves with "Posts loaded" after 1 second.
Chain them so each function starts only after the previous Promise succeeds.
Expected output:
    Login successful
    Profile loaded
    Posts loaded
    All tasks completed */

// function login(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const login = true;
//             if(login){
//                 resolve("Login successful");
//             }
//             else{
//                 reject("Login Failed");
//             }  
//         },1000);
//     })
// }

// function fetchProfile(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             profile = true;
//             if(profile){
//                 resolve("Profile loaded");
//             }
//             else{
//                 reject("Prfole Not Loaded");
//             }
//         },2000)
//     })
// }

// function fetchPosts(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             post = true;
//             if(post){
//                 resolve("Posts loaded");
//             }
//             else{
//                 reject("Posts are not loaded")
//             }
//         },1000)
//     })
// }

// login().then(value => {console.log(value); return fetchProfile()})
//        .then(value => {console.log(value); return fetchPosts()})
//        .then(value => {console.log(value); console.log("All tasks completed")})
//        .catch(error => console.log(error));



/* Task 10 — Test rejection
   Modify Task 9 so that fetchProfile() rejects with "Failed to load profile".
   Your program should print the login message, display the error, and not execute fetchPosts().*/


// function login(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const login = true;
//             if(login){
//                 resolve("Login successful");
//             }
//             else{
//                 reject("Login Failed");
//             }  
//         },1000);
//     })
// }

// function fetchProfile(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             profile = false;
//             if(profile){
//                 resolve("Profile loaded");
//             }
//             else{
//                 reject("Failed to load profile");
//             }
//         },2000)
//     })
// }

// function fetchPosts(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             post = true;
//             if(post){
//                 resolve("Posts loaded");
//             }
//             else{
//                 reject("Posts are not loaded")
//             }
//         },1000)
//     })
// }

// login().then(value => {console.log(value); return fetchProfile()})
//        .then(value => {console.log(value); return fetchPosts()})
//        .then(value => {console.log(value); console.log("All tasks completed")})
//        .catch(error => console.log(error));




/* Task 11 — Sequential chores
Use your walkDog(), cleanKitchen(), and takeOutTrash() functions.
Modify the conditions so that:
- Walking the dog succeeds.
- Cleaning the kitchen fails.
- Taking out the trash would succeed if called.
What will the output be? Then implement the program and verify your prediction. */

// function walkdog(){
//     return new Promise((resolve, reject) => {
//         const walkdog = true;
//         if(walkdog){
//             resolve("You walk the dog");
//         }
//         else{
//             reject("You didn't walk the dog");
//         }
//     })
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject) => {
//         const cleaned = true;
//         if(cleaned){
//             resolve("You cleaned the kitchen");
//         }
//         else{
//             reject("You didn't clean the kitchen");
//         }
//     })
// }

// function takeOutthetrash(){
//     return new Promise((resolve, reject) => {
//         const takeout = false;
//         if(takeout){
//             resolve("You took the trash out");
//         }
//         else{
//             reject("You didn't take the trash out");
//         }
//     })
// }

// walkdog().then(value => {console.log(value); return cleanKitchen()})
//          .catch(error => {console.log(error); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutthetrash()})
//          .catch(error => {console.log(error); return takeOutthetrash()})
//          .then(value => {console.log(value); return console.log("All chores are Executed")})
//          .catch(error => {console.log(error); return console.log("All chores are Executed")})
 




//--------------------------------------------------------------------------------------------------------------------
//14-10-2026


// async function greet(){
//     return "Hello Hari";
// }
// console.log(greet());
// greet().then(value => console.log(value));  // Accessing the result of promise by using .then().

// ------------------------------------------------------------------------------------------------------------


// async function greet(){
//     let name = "Hello Hari";
//     let result = await Promise.resolve(name);  //Promise.resolve(name) creates a Promise fulfilled with "Hello Hari".
//     console.log(result);
// }
// greet();

// ------------------------------------------------------------------------------------------------------------------

// function greet(){
//     return "Harischandra";
// }
// async function displaygreet(){
//     const value = await greet();  //Accessing the result by using await().
//     console.log(value);
// }
// displaygreet();

// -------------------------------------------------------------------------------------------------------------------



// async function add(n1, n2){
//     const sum = n1 + n2;
//     return sum;
// }
// console.log(add(10,20));
// add(10,20).then(value => console.log(value));  //Accessing the result of promise by using .then().

// ------------------------------------------------------------------------------------------------------------------



// function addition(n1, n2){
//     const sum = n1 + n2;
//     return sum;
// }
// async function display(){
//     const result = await addition(10,20);  //Accessing the result by using await().
//     console.log(result)
// }
// display();

// ------------------------------------------------------------------------------------------------------------------



// function getUser() {
//     return Promise.resolve("Tony");
// }

// async function displayUser() {
//     const name = await getUser();
//     console.log(name);
// }

// displayUser();

//-------------------------------------------------------------------------------------------------------------------


// function fetchemployee(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve({
//                 id : 1205,
//                 name : "Hari",
//                 Department : "IT"
//             })
//         },2000)
//     })
// }
// fetchemployee().then(value => console.log(value.id));
// fetchemployee().then(value => console.log(value.name));
// fetchemployee().then(value => console.log(value.Department));  // Aceessing values by using .then().



// async function display(){
//     const emp = await fetchemployee();
//     console.log(emp.name);
//     console.log(emp.Department);
//     console.log(emp.id);      // Accessing values by using async/await.
// }
// display();

// -----------------------------------------------------------------------------------------------------------------



// function login(uname, pwd){
//     return new Promise((resolve, reject)=>{
//         if(uname === "Tony" && pwd === "12345"){
//             resolve(`Hello ${uname}, login successfull`);
//         }
//         else{
//             reject("Invalid username or Password")
//         }
//     })
// }
// async function display(){
//     try{
//         const input = await login("Tony","12345");
//         console.log(input);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// display();



function add(...numbers){
    return numbers.reduce((total,sum) => total + sum, "")
}
console.log(add("h","a","r","i"))