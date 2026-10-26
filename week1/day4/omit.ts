interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

const employeeCharan: Employee = {
    id: 1205,
    name: "Charan",
    salary: 45000,
    department: "IT"
}

type useOfOmit = Omit<Employee, "department">


const Dept: useOfOmit ={
    id:1122,
    name: "Chandu",
    salary: 35000
}

// Object.assign(employeeCharan, Dept)
console.log(employeeCharan);
console.log(Dept);