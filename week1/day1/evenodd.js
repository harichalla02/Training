function checkevenodd(){
    let num = parseFloat(document.getElementById("num").value);
    if (num%2 === 0){
        // document.getElementById("evenodd").innerText="Even";
        alert(`your number ${num} is Even number`)
    }
    else{
        alert(`your number ${num} is Odd number`)
    }
}