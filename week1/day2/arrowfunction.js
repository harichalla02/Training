/*  Arrow functions are a new way to write functions in JavaScript. 
    Syntax : arguments => expression/logic
    (n1,n2) => {
        return n1+n2
    }
   */

let sum = (n1,n2)=>console.log(`Addtion of two numbers is : ${n1+n2}`)
sum(130,120)

let greet = (name) => console.log(`Hello ${name}, Welcome to Arrow Functions`)
greet("Hari")