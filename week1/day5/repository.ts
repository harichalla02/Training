import type { User, UpdateUserInput } from "./model.ts";

export class UserRepository {
    private users: User[] = [];

    // Get all users
    getAll(): User[] {
        return this.users;
    }

    // Find a user by ID
    getById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    //create a new user
    create(user: User): User {
        this.users.push(user);
        return user;
    }

    // Update an existing user
    update(id: number, changes: UpdateUserInput): User | undefined {
        const user = this.getById(id);
        if(!user){
            return undefined;
        }
        Object.assign(user, changes);
        return user;
    }

    // Set active to false
    deactivate(id: number): User | undefined {
        const user = this.getById(id);
        if(!user){
            return undefined;
        }
        user.active = false;
        return user;
    }
}
