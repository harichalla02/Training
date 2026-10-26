type userrole= "Admin" | "Editor" | "User" | "Developer" | "Tester" | "HR"

type user = {
    id: number;
    name: string;
    email: string;
    phone: number;
    role: userrole;
    salary: number
}

const user_hari:user = {
    id: 1205,
    name: "Hari",
    email: "harichalla02@gmail.com",
    phone: 8008473503,
    role: "Tester",
    salary: 45000
}

console.log(user_hari);

const user_siva: Partial<user> ={
    id: 1215,
    name: "Siva",
    role: "Developer"
}

console.log(user_siva);

const update: Partial<user> ={
    salary: 75000
};

//for one or two users it will be fine
Object.assign(user_hari, update);
Object.assign(user_siva, update);

//for multiple users
[user_hari, user_siva].forEach(user => {Object.assign(user, update)});

console.log(user_siva);
console.log(user_hari);