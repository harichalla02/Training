fetch("https://fakestoreapi.com/products")
.then(response =>{
    if(!response.ok){
        throw new Error(`HTTP Error : ${response.status}`)
    }
    return response.json();
})
.then(data => {
    const productbyID = data.find(pid => pid.id === 10);
    console.log(productbyID);
})
