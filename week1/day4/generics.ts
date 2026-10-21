//without Generics nad Union types
function getNumber(vlaue:number):number{
    return vlaue;
}
function getSring(vlaue:string):string{
    return vlaue;
}
console.log(getNumber(2500));
console.log(getSring("Hello"));




//Using Union types and void
function getValue(vlaue:number|string):void{
    console.log(vlaue);
}
getValue(100);
getValue("Hari");


//Using Union types and without void
function getValue1(vlaue:number|string):number|string{
    return vlaue;
}
console.log(typeof(getValue1("Hari")));
console.log(getValue1(100));
console.log(typeof(getValue1(220)));
console.log(typeof(getValue1("12054")));



// Using Generics
function display<g>(value:g):g{
    return value;
}
console.log(display(2500));
console.log(display("Tony"));
console.log(display(true));
console.log(display(false));



// Generics with type, arrays
function getLast<T>(value: T[]): T | undefined {
         return value[value.length - 1];
}
const result = getLast([10, 20, 30, 40])
const res = getLast([])
console.log(result)
console.log(res)



//Generics with extends
function getLength<T extends {length: number}>(value: T): number {
         return value.length;
}
const result1 = getLength([10, 20, 30, 40])
const res1 = getLength([])
console.log(result1)
console.log(res1)
// console.log(getLength(123))




// Using typescript type any 
function getLength1(value: any): number {
    return value.length;
}

console.log(getLength1("Tony")); // Works
console.log(getLength1([1, 2, 3])); // Works
console.log(getLength1(100));    // No TypeScript error