export class User {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
