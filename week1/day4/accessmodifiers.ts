class worker{
    public id : number;   // Accessible inside and outside the class.
    protected name : string; //Accessible inside this class and its subclasses.
    private salary : number; //Accessible only inside this class

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    displayDetails():void{
        console.log(this.name);  //Allowed: name is accessed inside the class
    }
}
const worker_1 = new worker(1214,"Hari",25000);
console.log(worker_1.id);   // Allowed: id is public; output: 1214
// worker_1.salary = 75000;   // Error: salary is private and cannot be accessed directly outside the class.
// console.log(worker_1.salary);
// console.log(worker_1.name);  // Error: name is protected and cannot be accessed directly outside the class.
worker_1.displayDetails()