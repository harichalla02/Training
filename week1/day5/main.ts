
import { UserRepository } from "./repository.js";
import { UserService } from "./service.js";

// 1. Create repository
const repository = new UserRepository();

// 2. Pass repository to service
const service = new UserService(repository);

// 3. Create two users with different roles
const user1 = service.create({
    name: "Hari",
    email: "hari@gmail.com",
    role: "ADMIN"
});

const user2 = service.create({
    name: "Charan",
    email: "charan@gmail.com",
    role: "USER"
});

console.log("Users created successfully");

// 4. Print all users
console.log("\n--- All Users ---");
console.log(service.getAll());

// 5. Search by email
console.log("\n--- Search by Email ---");
console.log(service.search("hari@gmail.com"));

// 6. Filter active users
console.log("\n--- Active Users ---");
console.log(service.filterByActive(true));

// Filter admins
console.log("\n--- Admin Users ---");
console.log(service.filterByRole("ADMIN"));

// 7. Update a user's name
console.log("\n--- Update User ---");
const updatedUser = service.update(user2.id, {
    name: "Charan Kumar"
});
console.log(updatedUser);

// 8. Deactivate a user
console.log("\n--- Deactivate User ---");
const deactivatedUser = service.deactivate(user2.id);
console.log(deactivatedUser);

// Verify inactive users
console.log("\n--- Inactive Users ---");
console.log(service.filterByActive(false));

// 9. Test nonexistent ID
console.log("\n--- Test User Not Found ---");
try {
    service.getById(999);
} catch (error) {
    if (error instanceof Error) {
        console.log("Error:", error.message);
    }
}

// Test duplicate email
console.log("\n--- Test Duplicate Email ---");
try {
    service.create({
        name: "Another Hari",
        email: "hari@gmail.com",
        role: "USER"
    });
} catch (error) {
    if (error instanceof Error) {
        console.log("Error:", error.message);
    }
}

// Display users sorted by name
console.log("\n--- Users Sorted by Name ---");
console.log(service.sortByName());

console.log("\nAll tests completed.");
