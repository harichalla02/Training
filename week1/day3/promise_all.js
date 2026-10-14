function getEmployee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["Hari", "Chandu"]);
        },2000)
    })
}
function getDepartments(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(["IT", "CSE"]);
        },2000)
    })
}
function getSalaries(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([75000, 550000]);
        },2000)
    })
}
async function display(){
    const [employee_names, employee_departments, employee_salaries] = await Promise.all(
        [getEmployee(), getDepartments(), getSalaries()]
    )
    console.log(employee_names);
    console.log(employee_departments);
    console.log(employee_salaries);
}
display();