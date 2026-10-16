function calBill(price:number, quantity:number):number{
    const bill = price * quantity;
    return bill;
}
console.log(calBill(15999,10));