// fetch("https://jsonplaceholder.typicode.com/users/2")
//     .then(response => {console.log(response);
//                         return response.json();})
//     .then(data => console.log(data))
//     .catch(error => console.log(error));



fetch("https://jsonplaceholder.typicode.com/users/5")
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw new Error("User not found");
        }
        return response.json();})
    .then(data => console.log(data))
    .catch(error => console.log(error));