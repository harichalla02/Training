class Student{
    id : number;
    name : string;
    branch : string;
    year : number;

    constructor(id:number, name:string, branch:string, year:number){
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.year = year;
    }
    displayStudent() : void{
        console.log(`Student id is: ${this.id}`)
        console.log(`Student name is: ${this.name}`)
        console.log(`Student branch is: ${this.branch}`)
        console.log(`Student is : ${this.year} year`)
    }
}

const student_hari = new Student(1205,"Hari","IT",4);
const student_giri = new Student(1215,"Giri","IT",3);
const student_chari = new Student(1225,"Chari","IT",1);
const student_harini = new Student(1250,"Harini","CSE",2);


student_chari.displayStudent();
student_hari.displayStudent();
student_harini.displayStudent();
