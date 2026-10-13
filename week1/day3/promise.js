function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkdog = true;  // If false, the Promise rejects and the next chores in the chain are skipped.
            if (walkdog){
                resolve("You walk the Dog");
            }
            else{
                reject("You didn't walk the dog");
            }   
    },1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchencleaned = true;  // If false, the Promise rejects and the next chores in the chain are skipped.
            if (kitchencleaned){
                resolve("you clean the kitchen");
            }
            else{
                reject("You didn't cleaned the Kitchen")
            }
    },2500);
    }) 
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeouttrash = true;  // If false, the Promise rejects and the next chores in the chain are skipped.
            if (takeouttrash){
                resolve("you take out the trash");
            }
            else{
                reject("You didn't take the trash out");
            }
    },500);
    })
}
// Promise chaining: performs each chore only after the previous one succeeds.
walkDog().then(value => {console.log(value); return cleanKitchen()})  // Starts the next chore.
         .then(value => {console.log(value); return takeOutTrash()})  // Starts the next chore.
         .then(value => {console.log(value); console.log("You finished all chores")})
         .catch(error => console.error(error));  // Handles a rejection in the chain.
