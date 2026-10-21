function printValue(value: string | number){
    if(typeof(value) === "string"){
        console.log(value.toUpperCase());
    }
    else{
        console.log(value**2);
    }
}
printValue("Harischandra Prasad");
printValue(12);






interface Employee {
    id: number;
    name: string;
    dept: string;
    salary: number;
}
const data: Employee[] = [
    { id: 1, name: "Tony", dept: "IT", salary: 30000 },
    { id: 2, name: "Rahul", dept: "HR", salary: 40000 },
    { id: 3, name: "Priya", dept: "Finance", salary: 35000 }
];

function findEmployee(valid: string | number): void {
    if (typeof valid === "string") {
        const employee = data.find(emp => emp.name === valid);

        if (employee) {
            console.log("Employee found with name:", employee.name.toUpperCase());
        } else {
            console.log("Employee not found");
        }
    } else {
        const employee = data.find(emp => emp.id === valid);

        if (employee) {
            console.log("Employee found with id:", employee.id);
        } else {
            console.log("Employee not found");
        }
    }
}

findEmployee("Tony");
findEmployee(2);
findEmployee("John");
findEmployee(7);