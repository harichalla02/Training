import type { User, UpdateUserInput } from "./model.ts";
export declare class UserRepository {
    private users;
    getAll(): User[];
    getById(id: number): User | undefined;
    create(user: User): User;
    update(id: number, changes: UpdateUserInput): User | undefined;
    deactivate(id: number): User | undefined;
}
//# sourceMappingURL=repository.d.ts.map