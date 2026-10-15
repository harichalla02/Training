
fetch("http://localhost:3000/employeedataset.json")
    .then(response=>{
        if(!response.ok){
            throw new Error(`HTTP Error : response.status`)
        }
        return response.json();
    })
    .then(data=>{
        const employeeById = data.find(emp => emp.id === 22);
        const employeeByName = data.find(emp => emp.name === "Pooja");
        const employeeByDept = data.find(emp => emp.dept === "IT");
        const employeeByDeptName = data.find(emp => emp.dept === "Engineering");
        const groupByDepartment = data.filter(emp => emp.dept === "Finance");
        console.log(employeeById);
        console.log(employeeByName);
        console.log(employeeByDept);
        console.log(employeeByDeptName);
        console.log(groupByDepartment);

    })