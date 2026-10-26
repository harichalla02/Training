export class UserRepository {
    users = [];
    // Get all users
    getAll() {
        return this.users;
    }
    // Find a user by ID
    getById(id) {
        return this.users.find(user => user.id === id);
    }
    //create a new user
    create(user) {
        this.users.push(user);
        return user;
    }
    // Update an existing user
    update(id, changes) {
        const user = this.getById(id);
        if (!user) {
            return undefined;
        }
        Object.assign(user, changes);
        return user;
    }
    // Set active to false
    deactivate(id) {
        const user = this.getById(id);
        if (!user) {
            return undefined;
        }
        user.active = false;
        return user;
    }
}
//# sourceMappingURL=repository.js.map