interface Employee{
    id : number;
    name: string;
    salary: number;
    department: number;
}
//Union Type alias
type employee_role = "Developer" | "Tester"|"Manager";

interface contactdetails{
    mail: string;
    mobileno: number;
}

interface address{
    paddress: string;
    taddress: string;
}

interface Employee
    extends  contactdetails, address{

}
//Intersecting union type alias and interface.
const employee: Employee & {role: employee_role} = {
    id: 101,
    name: "Tony",
    salary: 75000,
    department: 1122,
    role: "Developer",
    mail: "harichalla02@gmail.com",
    mobileno: 8008473503,
    paddress: "Guntur",
    taddress: "Hyderabad"
}
console.log(employee);