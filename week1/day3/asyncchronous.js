EXAMPLE:1
const wait = (ms, callback) => {
setTimeout(callback, ms);
};
console.log(1);                 
wait(2000, () => console.log(2, "this executed after 2 seconds"));  // Here wait() takes a callback function as an argument and executes it after 2000 ms.
console.log(3);


EXAMPLE:2
console.log('Venkatash');
console.log('Mogili');
setTimeout(() => {     
    calculate();
}, 1000);  // Schedules calculate() to execute after approximately 1 second.
console.log('JS Course');
console.log('TS Course');
function calculate() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log('Math result ', sum);
}