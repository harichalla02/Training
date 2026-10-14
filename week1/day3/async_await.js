function employees(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                id : 1215,
                name : "Chandu",
                dept : "CSE"
            })
        },2000);
        console.log("Goodmorning!")
    })
}
console.log("Hello");
async function displayemployee(){
    console.log("Start");
    const employee = await employees();  //await doesn't block the entire javascript thread. It allows the execution of synchronous code.
    console.log(employee.id);
    console.log(employee.name);
    console.log("Middle");
}
console.log("Middle1215");
displayemployee();
console.log("End");