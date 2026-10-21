interface Employee {
    id : number,
    name : string,
    dept : string,
    salary : number
}
async function displayEmployee(){
    try{
        const response = await fetch("http://localhost:3000/employeedataset.json");
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        const data:Employee[] = await response.json();
        function checkValid(valid : string | number){
            if(typeof valid === "string"){
                const employee = data.find(emp => emp.name === valid); 
                if(employee){
                    console.log("Employe founded by name : ", employee);
                }
                else{
                    console.log("Employee not found")
                }
            }
            else{
                const employee = data.find(emp => emp.id ===  valid);
                if(employee){
                    console.log("Employee founded by Id : ",employee);
                }
                else{
                    console.log("Employee not found")
                }
            }
        }
        checkValid("Mahesh");
        checkValid(25);
        checkValid("Hari");
        checkValid(65);
    }
    catch(error){
        console.log(error);
    }
}
displayEmployee();