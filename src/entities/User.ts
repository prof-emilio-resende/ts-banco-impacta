export class User {
    constructor(
        public name: string,
        public password: string
    ) {
        if (!name || !password) {
            throw new Error('Name and password are required');
        }
    }

    authenticate(givenPassword: string): boolean {
        return givenPassword === this.password
    }
}