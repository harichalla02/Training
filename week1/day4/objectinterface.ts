interface Employee{
    id : number;
    name: string;
    salary: number;
    department: number;
}
type employee_role = "Developer" | "Tester"|"Manager";

interface contactdetails{
    mail: string;
    mobileno: number;
}

interface address{
    paddress: string;
    taddress: string;
}

interface employeewithconatct
    extends Employee, contactdetails, address{

}

const employee: employeewithconatct & {role: employee_role} = {
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