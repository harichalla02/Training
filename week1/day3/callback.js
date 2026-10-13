EXAMPLE:1
function fun1(callback){
    setTimeout(() => {console.log("Task1"); }, 3000);  // Schedules Task1 to execute after approximately 3 seconds.
    callback();     // Calls the callback function immediately without waiting for Task1.
}
function fun2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
    console.log("Task5");
}
fun1(fun2);


EXAMPLE:2
function divideByHalf(sum) {
    setTimeout(() => {console.log(Math.floor(sum / 2)); }, 2000);  // Schedules divideByHalf() to execute after approximately 2 seconds.
}
function multiplyBy2(sum) {
    setTimeout(() => {console.log(sum * 2); }, 1000);  // Schedules multiplyBy2() to execute after approximately 1 seconds.
}
function operationOnSum(num1, num2, operation) {
    var sum = num1 + num2;
    operation(sum);   // Here operation is a callback function with sum as an argument.
}
operationOnSum(3, 3, divideByHalf);
operationOnSum(5, 5, multiplyBy2); 
