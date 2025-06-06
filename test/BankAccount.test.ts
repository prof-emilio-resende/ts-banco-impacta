import { BankAccount } from '../src/entities/BankAccount';

describe('BankAccount', () => {
    it('should create a bank account with valid data', () => {
        // Arrange
        const expectedBalance = 1000;
        const expectedAccountNumber = '123456789';
        const expectedOwner = 'Emilio Resende';
        
        // Act
        const account = new BankAccount(expectedBalance, expectedAccountNumber, expectedOwner);
        
        // Assert
        expect(account.balance).toBe(expectedBalance);
        expect(account.accountNumber).toBe(expectedAccountNumber);
        expect(account.owner).toBe(expectedOwner);
    });

    it('should deposit money into the account', () => {
        // Arrange
        const initialBalance = 1000;
        const depositAmount = 500;
        const expectedBalance = initialBalance + depositAmount;
        
        // Act
        const account = new BankAccount(initialBalance, '123456789', 'Emilio Resende');
        account.deposit(depositAmount);
        
        // Assert
        expect(account.balance).toBe(expectedBalance);
    });
});