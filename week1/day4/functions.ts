const numbers = (...num:number[]) =>{
    return num.reduce((total,n)=> total+n,0);
}
console.log(numbers(10,20,30,40));   // adding multiple value by using arrow funtion and reduce method



const greet = (name:string) => {
    console.log(`Hello ${name} good morning`)
}
greet("Tony")




function squareresult(sum:number):void{
    console.log(sum*sum);
}
function devidedby2(sum:number):void{
    console.log(sum/2);
}
function calculate(num1:number,num2:number,operation:(sum:number) => void):void{
    let sum = num1+num2;
    operation(sum);
}
calculate(20,30,squareresult);
calculate(30,40,devidedby2)