export function UserNotFoundError(): Error{
    return new Error("User not found")
}

export function DuplicateEmailError(): Error{
    return new Error("Email already exists")
}