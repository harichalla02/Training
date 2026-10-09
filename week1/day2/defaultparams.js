/*  Default parameters provide a value when an argument is missing or undefined.
    If we did not provide a default value, the parameter would be undefined if no argument is passed for it.
    Then this default value will be used instead of undefined. */


function addtion(n1=0,n2=0,n3=0,n4=0)
{
    console.log(`Addition of four numbers is : ${n1+n2+n3+n4}`);
}
addtion(15,22,37,46);
addtion(15,22,37);
addtion(15,22);
addtion(15);

function greet(name="Guest")
{
    console.log(`Hello ${name}, Welcome to Default Parameters`);
}
greet(); // Uses default parameter
greet("Alice"); // Uses provided parameter