async function getUser(){
    try{
        const response = await fetch("http://localhost:3000/employeedataset.json");
        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`)
        }
        const data = await response.json();
        const employeeById = data.find(emp => emp.id === 17);
        const employeebyName = data.find(emp => emp.name === "Mahesh")
        const employeebyDept = data.filter(emp => emp.dept === "Finance")
        const totoalsalarybyDept = employeebyDept.reduce((total, emp)=>total + emp.salary,0)
        console.log(employeeById);
        console.log(employeebyName);
        console.log(employeebyDept);
        console.log(totoalsalarybyDept)
    }
    catch(error){
        console.log(error);
    }
}
getUser();