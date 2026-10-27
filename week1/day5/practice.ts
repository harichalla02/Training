
// let value: any = "Hello";
// console.log(value.toUpperCase()); // HELLO
// value = 100;
// console.log(value.toUpperCase()); // Runtime error!

// let response: unknown = "Hello";
// if(typeof response === "string"){
// console.log(response.toUpperCase());} // HELLO



// function sum(...nums: number[]): number{
//     return nums.reduce((total: number, sum:number) => total += sum, 0)
// }
// console.log(sum(10,20,30,40,50));



// let tuples: [string, number] = ["Hari", 575]
// console.log(tuples);




// let tup_array: [string, number][] = [
//     ["Hari", 1205],
//     ["Siva", 1212]
// ]
// console.log(tup_array);


// enums in typescript
// enum role{
//     admin,
//     user,
//     guest
// }
// let Role = role.user;
// console.log(Role);



// enum with manual indexing
// enum role2{
//     admin = 1,
//     user = 5,
//     guest
// }

// let Role2 = role2.guest;
// console.log(Role2);  // Prints 6 because user value is 5 next value is 6



// enum with strings
// enum role{
//     admin = "Admin",
//     user = "User",
//     guest = "Guest"
// }

// let Role = role.user;
// console.log(Role);


// Heterogenious enums
// enum role{
//     admin = "Admin",
//     user = 1,
//     guest = "Guest"
// }

// let Role = role.user;
// console.log(Role);





// function printLength<T extends {length: number}>(value: T): void{
//     console.log(value.length)
// }

// printLength("Hello World");
// printLength([10,20,30,40]);








// interface Student{
//     id: number,
//     name: string, 
//     age: number,
//     marks: number[]
// }

// const studentHari: Student = {
//     id: 1205,
//     name: "Hari",
//     age: 26,
//     marks: [78,98,99]
// }

// const studentSiva: Student = {
//     id: 1225,
//     name: "Siva",
//     age: 24,
//     marks: [78, 25, 37]
// }

// const studentMounika: Student = {
//     id: 1215,
//     name: "Mounika",
//     age: 24,
//     marks: [95,98,99]
// }


// function displayDetails(student: Student): void{
//     console.log(student.id);
//     console.log(student.name);
//     console.log(student.age);
//     if(student.marks.every(mark => mark >= 35))
//        {
//             console.log("Passed")
//         }
//     else{
//         console.log("Failed")
//     }
// }

// displayDetails(studentHari);
// displayDetails(studentSiva);
// displayDetails(studentMounika);






// let name: string = "Hari";
// name = "Charan";
// console.log(name);


// function greet(name: string, age?: number): string { 
//   if (age) { 
//     return `${name} is ${age} years old`; 
//   } 
//   return `Hello, ${name}`; 
// } 
// console.log(greet("Siri"));
// console.log(greet("Hari", 58));


// function greet(name: string, greeting: string = "Hello"): string { 
//   return `${greeting}, ${name}`; 
// }
// console.log(greet("Siri"));
// console.log(greet("Hari", "Hi"));


function subTotal(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0)
}
console.log(subTotal(10,20,30,40));