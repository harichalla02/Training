function fetchemployee(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                id : 1205,
                name : "Hari",
                Department : "IT"
            })
        },2000)
    })
}
fetchemployee()
console.log(id);
// fetchemployee().then(value => console.log(value.id));
// fetchemployee().then(value => console.log(value.name));
// fetchemployee().then(value => console.log(value.Department));



// async function display(){
//     const emp = await fetchemployee();
//     console.log(emp.name);
//     console.log(emp.Department);
//     console.log(emp.id);   
// }
// display();