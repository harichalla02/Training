function isAdult(age:number){
    if(age >= 18){
        return "Adult";
    }
    else{
        return "Not an Adult";
    }
}
console.log(isAdult(25));