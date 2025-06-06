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

    it('should withdraw money from the account', () => {
        // Arrange
        const initialBalance = 1000;
        const depositAmount = 500;
        const expectedBalance = initialBalance - depositAmount;
        
        // Act
        const account = new BankAccount(initialBalance, '123456789', 'Emilio Resende');
        account.withdraw(depositAmount);
        
        // Assert
        expect(account.balance).toBe(expectedBalance);
    });

    it('should transfer money from one account into another', () => {
        // Arrange
        const initialBalanceA = 1000;
        const initialBalanceB = 0;
        const transferAmount = 500;
        const expectedBalance = 500;
        
        // Act
        const accountA = new BankAccount(initialBalanceA, '123456780', 'Emilio Resende');
        const accountB = new BankAccount(initialBalanceB, '123456789', 'Emilio Resende 2');
        accountA.transfer(accountB, transferAmount);
        
        // Assert
        expect(accountA.balance).toBe(expectedBalance);
        expect(accountB.balance).toBe(expectedBalance);
    });
});