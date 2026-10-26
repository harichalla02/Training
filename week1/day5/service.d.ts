import type { CreateUserInput, UpdateUserInput, User, Role } from "./model.js";
import { UserRepository } from "./repository.js";
export declare class UserService {
    private repository;
    private nextId;
    constructor(repository: UserRepository);
    create(input: CreateUserInput): User;
    getAll(): User[];
    getById(id: number): User;
    update(id: number, changes: UpdateUserInput): User;
    deactivate(id: number): User;
    search(query: string): User[];
    filterByRole(role: Role): User[];
    filterByActive(active: boolean): User[];
    sortByName(): User[];
}
//# sourceMappingURL=service.d.ts.map