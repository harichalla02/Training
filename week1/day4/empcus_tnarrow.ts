type Employee = {
    name: string;
    salary: number;
};
const employee: Employee[] = [
    {name : "Hari", salary : 55000},
    {name : "Charan", salary : 75000},
    {name : "Tarak", salary : 65000}
]

type Customer = {
    name: string;
    membershipLevel: string;
};
const membership: Customer[] =[
    {name : "Krishna", membershipLevel : "Pro"},
    {name : "Chnadu", membershipLevel : "Go"},
    {name : "CVR", membershipLevel : "Plus"}
]

// Write your function here.
// function check(value : string):void{ 
//     const findemployee = employee.find(emp => emp.name === value);
//     if(findemployee){
//         console.log(findemployee.salary)        
//     }
//     else{
//         const findcustomer = membership.find(cus => cus.name === value);
//         if(findcustomer){
//             console.log(findcustomer.membershipLevel);
//         }
//         else{
//             console.log("Person not found in employee and customer arrays!")
//         }
//     }
// }


function check(value : string):void{
    const person = employee.find(emp => emp.name === value) ?? membership.find(cus => cus.name === value);
    if(person){
        // Use "in" to narrow the type.
        if("salary" in person){
            console.log(person.salary);
        }
        else{
            console.log(person.membershipLevel);
        }
    }
    else{
        console.log("Person not found")
    }
}
// Do not use any.
check("Hari");
check("CVR");
check("buddy")