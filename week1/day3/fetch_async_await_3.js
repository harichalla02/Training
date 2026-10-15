async function getUser(){
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw new Error(`HTTP Error : ${response.status}`)
        }
        const data = await response.json();
        // console.log(data)
        const product = data.find(pod=>pod.id === 2);
        const category = data.filter(pod=>pod.category === "men's clothing");
        console.log(product);
        console.log(category);
    }
    catch(error){
        console.log(error)
    }
}
getUser();