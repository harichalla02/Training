const employees = require('./employeedataset.json');


// // Group the employees by department 
// const result = employees.reduce((groups, emp) => {
//     if (!groups[emp.dept]) {
//         groups[emp.dept] = [];
//     }

//     groups[emp.dept].push(emp.name);

//     return groups;
// }, {});

// console.log(result);




// // Average salary of employees
// const totalsalary = employees.reduce((total, emp) =>{
//     total += emp.salary;
//     return total;
// },0);
// let averagesalary = totalsalary/employees.length;
// console.log(averagesalary)


// Top three earners
const topthree = employees.sort((a,b) => b.salary - a.salary).slice(0,3);
console.log(topthree);
