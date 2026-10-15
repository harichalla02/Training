async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/55");
        if(!response.ok){
        throw new Error(`HTTP error: ${response.status}, ${response.message}`)
    }
    const data = await response.json();
    console.log(data)
    }
    catch(error){
        console.log(error.message);
    }
}
getUser();