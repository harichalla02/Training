function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkdog = true;
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
            const kitchencleaned = true;
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
            const takeouttrash = true;
            if (takeouttrash){
                resolve("you take out the trash");
            }
            else{
                reject("You didn't take the trash out");
            }
    },500);
    })
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all chores")})
         .catch(error => console.error(error));
