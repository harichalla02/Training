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
        const name = await greet("Hari");
        console.log(`Hai ${name}`);
    }
    catch(error){
        console.log(error)
    }
}
display();