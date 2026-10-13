EXAMPLE:1
console.log("Start");
setTimeout(() => {         
    console.log("Hello");
}, 2000);   //setTimeout() schedules the callback to run after at least 2 seconds.
console.log("End");



EXAMPLE:2
console.log("Start");
setTimeout(() => {
    console.log("First timer");
    setTimeout(() => {
        console.log("Third timer");  /*here the third timer is nested inside the first timer, 
                                    so it will only be scheduled after the first timer's callback is executed.*/
    }, 0);
}, 2000);
setTimeout(() => {
    console.log("Second timer");     /*The second timer is scheduled to run after 1 second, 
                                      so it will execute before the first timer's callback.*/
}, 1000);
console.log("End");