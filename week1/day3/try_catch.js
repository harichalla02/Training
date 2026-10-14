function greet(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const load = false;
            if(load){
                resolve(`Goodmorning ${name} data loaded successfully!`);
            }
            else{
                reject("Not Loaded");
            }
        },1000)
    })
}
async function display(){
    try{
        const name = await greet("Hari");   // try block will handle the resolve promise
        console.log(`Hai ${name}`);        // executed only when promise is fullfilled
    }
    catch(error){                          // catch block will handle rejection promise
        console.log(error)                 // executed only when promise is rejected
    }
}
display();