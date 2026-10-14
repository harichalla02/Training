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
        },1000)
    })
}
function getSalaries(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([75000, 550000]);
        },5000)
    })
}
async function display(){
       // Promise.all will fetch all the data from three functions concurrently means at a time.
    const [employee_names, employee_departments, employee_salaries] = await Promise.all(
        [getEmployee(), getDepartments(), getSalaries()]
    )     // Each variable receives the corresponding resolved array.
    console.log(employee_departments);
    console.log(employee_names);
    console.log(employee_salaries);
        // It waits until all three Promises are fulfilled.
        // The results are returned in the same order as the input Promises, not in the order in which they finish.
}
display();