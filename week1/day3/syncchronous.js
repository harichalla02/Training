EXAMPLE:1
console.log(1);
console.log(2);
console.log(3);  /* Each statement runs in order one after another. 
                The next statement will not be executed until the current statement is completed.*/


Example:2
console.log('Venkatash');
console.log('Mogili');
calculate();  /* But calculate() is a time-consuming operation, 
              so it will block the execution of the next statements until it is completed.*/
console.log('JS Course');
console.log('TS Course');

function calculate() {
    let sum = 0;

    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }

    console.log('Math result ', sum);
}