import { UserRepository } from "./repository.js";
import { UserNotFoundError, DuplicateEmailError } from "./errors.js";
export class UserService {
    repository;
    nextId = 1;
    constructor(repository) {
        this.repository = repository;
    }
    // 1. Create a new user
    create(input) {
        // Validate name
        if (!input.name.trim()) {
            throw new Error("Name cannot be empty");
        }
        // Validate email
        const email = input.email.trim().toLowerCase();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email address");
        }
        // Check for duplicate email
        const duplicate = this.repository
            .getAll()
            .some(user => user.email.toLowerCase() === email);
        if (duplicate) {
            throw DuplicateEmailError();
        }
        // Generate a unique ID
        const user = {
            id: this.nextId++,
            name: input.name.trim(),
            email: email,
            role: input.role,
            active: true
        };
        // Save user in repository
        return this.repository.create(user);
    }
    // 2. Get all users
    getAll() {
        return this.repository.getAll();
    }
    // 3. Get user by ID
    getById(id) {
        const user = this.repository.getById(id);
        if (!user) {
            throw UserNotFoundError();
        }
        return user;
    }
    // 4. Update an existing user
    update(id, changes) {
        // Check whether user exists
        this.getById(id);
        // Validate name if provided
        if (changes.name !== undefined) {
            if (!changes.name.trim()) {
                throw new Error("Name cannot be empty");
            }
            changes = {
                ...changes,
                name: changes.name.trim()
            };
        }
        // Validate email if provided
        if (changes.email !== undefined) {
            const email = changes.email.trim().toLowerCase();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                throw new Error("Invalid email address");
            }
            // Check duplicate email, excluding current user
            const duplicate = this.repository
                .getAll()
                .some(user => user.id !== id &&
                user.email.toLowerCase() === email);
            if (duplicate) {
                throw DuplicateEmailError();
            }
            changes = {
                ...changes,
                email: email
            };
        }
        // Save changes
        const updatedUser = this.repository.update(id, changes);
        if (!updatedUser) {
            throw UserNotFoundError();
        }
        return updatedUser;
    }
    // 5. Deactivate a user
    deactivate(id) {
        this.getById(id);
        const user = this.repository.deactivate(id);
        if (!user) {
            throw UserNotFoundError();
        }
        return user;
    }
    // 6. Search by name or email
    search(query) {
        const searchText = query.trim().toLowerCase();
        return this.repository.getAll().filter(user => user.name.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText));
    }
    // 7. Filter users by role
    filterByRole(role) {
        return this.repository
            .getAll()
            .filter(user => user.role === role);
    }
    // 8. Filter users by active status
    filterByActive(active) {
        return this.repository
            .getAll()
            .filter(user => user.active === active);
    }
    // 9. Sort users by name
    sortByName() {
        return [...this.repository.getAll()].sort((a, b) => a.name.localeCompare(b.name));
    }
}
//# sourceMappingURL=service.js.map