//General class declaration
class Employees{
    id: number;
    name: string;
    salary: number;
    address: string;

    constructor(id:number, name:string, salary:number, address:string) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
    display(){
        console.log(`Student id is: ${this.id}`)
        console.log(this)
    }
}

const employee1 = new Employees(1122, "Chandu", 65000, "Hyderabad");

employee1.display()




//Using Generics
class Student<T, U, V>{
    sid: T;
    sname: U;
    sbranch: V;

    constructor(id: T, name: U, branch: V){
        this.sid = id;
        this.sname = name;
        this.sbranch = branch;
    }

    displayStudent(){
        console.log(this.sname);
        console.log(this.sid);
    }
}

const student1 = new Student("STU1205", "Tony", "IT");
const student2 = new Student(1205, "Hari", "CSE");

student1.displayStudent();
student2.displayStudent();