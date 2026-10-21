//General Interface structure
interface Employee{
    id: number,
    name: string,
    salary: number 
}
const Emp1: Employee = {
    id: 1205,
    name: "Tony",
    salary: 45000
}
console.log(Emp1);




//Interface using Generics
interface Employees<T, U>{
    id: T,
    name: U,
    salary: T 
}
const Employee1: Employees<number, string> = {
    id: 1205,
    name: "Tony",
    salary: 45000
}
const Employee2: Employees<string, string> = {
    id: "EMP1205",
    name: "Tony",
    salary: "45000"
}
console.log(Employee1);
console.log(Employee2);





//Generics with Multiple interfaces
interface Employeerepo{
    id: number;
    name: string;
}
interface Product{
    id: number;
    title: string;
}

interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
}

const employeeRepository: Repository<Employeerepo> = {
    getAll(){
        return [{id: 1205, name: "Tony"}, {id: 1215, name: "Chandu"}];
    },
    getById(id){
        return this.getAll().find(emp => emp.id === id) 
    }
};

const productRepository: Repository<Product> = {
    getAll(){
        return [{id: 1112, title: "Mobile"}, {id: 1113, title:"Laptop"}]
    },
    getById(id){
        return this.getAll().find(product => product.id === id)
    }
};


console.log(employeeRepository.getAll());
console.log(employeeRepository.getById(1215));

console.log(productRepository.getAll());
console.log(productRepository.getById(1112));