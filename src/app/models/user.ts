export class User {
    id: string;
    email: string
    firstName: string;
    lastName: string;
    avatarUrl: string;
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
