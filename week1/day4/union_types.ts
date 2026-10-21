//Union types allos values with different types
const user1 : UserId = 122;
type UserId = string | number;  
const user2 :UserId = "ATS122"
console.log(user1);
console.log(user2);


// Literal types are restricted to perticular values
type orderStatus = "pending" | "shipped" | "delivered" | "cancelled"
const status1 : orderStatus = "cancelled";
const status2 : orderStatus = "shipped";
const status3 : orderStatus = "delivered";
const status4 : orderStatus = "pending";
console.log(status1);
console.log(status2);
console.log(status3);
console.log(status4);


function OrderStatus(status:orderStatus):void {
    console.log(status);
}
OrderStatus("pending");
// OrderStatus("processing")