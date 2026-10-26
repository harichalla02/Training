"use strict";
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
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role["user"] = "User";
    role["guest"] = "Guest";
})(role || (role = {}));
let Role = role.admin;
console.log(Role);
