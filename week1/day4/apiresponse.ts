interface apiResponse<T>{
    success: boolean;
    data: T;
    message: string;
}
interface Employee{
    id: number;
    name: string;
}

const loginResponse: apiResponse<string> = {
    success: true,
    data: "Login successful",
    message: "Login completed successfully"
}

const employee: apiResponse<Employee[]> = {
    success: true,
    data: [
        {id: 101, name:"Tony"},
        {id: 102, name:"Chandu"},
        {id: 103, name:"Siva"}
    ],
    message: "Employee retrieved successfully"
}

console.log(loginResponse.data);
console.log(employee.data[1]?.id);

