type user={
    id: number;
    name: string;
    email: string;
    phone: number;
    role: userrole;
    salary: number
};

type userrole= "Admin" | "Editor" | "User" | "Developer" | "Tester" | "HR"

const user_hari:user = {
    id: 1205,
    name: "Hari",
    email: "harichalla02@gmail.com",
    phone: 8008473503,
    role: "Tester",
    salary: 45000
}

const user_charan: Pick<user, "id" | "name" | "salary"> = {
    id: 1122,
    name: "Charan",
    salary: 10000
}
const user_Gopi: Pick<user, "id"|"name"|"role"|"salary"> = {
    id: 1205,
    name: "Gopi",
    role: "Developer",
    salary: 45000,
};

const update: Pick<user, "salary">={
    salary: 75000
}

const sal_update: Pick<user, "salary"> = {
    salary:100000
}

Object.assign(user_Gopi, update);
[user_hari,user_charan].forEach(user => {Object.assign(user, sal_update)})

console.log(user_hari.salary);
console.log(user_Gopi);
console.log(user_charan);