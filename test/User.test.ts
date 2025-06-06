import { User } from '../src/entities/User';

describe('User', () => {
    it('should create a user with valid data', () => {
        // Arrange
        const expectedUser = 'Emilio Resende';
        const expectedPassword = '123';
        
        // Act
        const user = new User(expectedUser, expectedPassword);

        // Assert
        expect(user.name).toBe(expectedUser);
        expect(user.password).toBe(expectedPassword);
    });

    it('should authenticate a correct password', () => {
        // Arrange
        const expectedAuthentication = true;
        
        // Act
        const user = new User('Emilio Resende', '123');
        const isAuthenticated = user.authenticate('123');
        
        // Assert
        expect(isAuthenticated).toBe(expectedAuthentication);
    });

    it('should authenticate a incorrect password', () => {
        // Arrange
        const expectedAuthentication = false;
        
        // Act
        const user = new User('Emilio Resende', '123');
        const isAuthenticated = user.authenticate('wrongPassword');
        
        // Assert
        expect(isAuthenticated).toBe(expectedAuthentication);
    });
});
