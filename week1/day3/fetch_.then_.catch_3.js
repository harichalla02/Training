console.log("JavaScript file connected!");
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
















// .then(data => {
//     console.log(data);

//     const container = document.getElementById("products");

//     for (let i = 0; i < data.length; i++) {
//         const product = data[i];

//         container.innerHTML += `
//             <div class="card">
//                 <img src="${product.image}" alt="${product.title}">
//                 <h3>${product.title}</h3>
//                 <p>${product.category}</p>
//                 <p class="price">$${product.price.toFixed(2)}</p>
//                 <p>⭐ ${product.rating.rate} / 5</p>
//             </div>
//         `;
//     }

//     document.getElementById("status").textContent =
//         `${data.length} products loaded`;
// })



