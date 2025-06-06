import { CheckingAccount, SavingsAccount } from '../src/entities/BankAccount';

describe('BankAccount', () => {
    it('should create a bank account with valid data', () => {
        // Arrange
        const expectedBalance = 1000;
        const expectedAccountNumber = '123456789';
        const expectedOwner = 'Emilio Resende';
        
        // Act
        const savingAccount = new SavingsAccount(expectedBalance, expectedAccountNumber, expectedOwner);
        const checkingAccount = new CheckingAccount(expectedBalance, expectedAccountNumber, expectedOwner);
        
        // Assert
        expect(savingAccount.balance).toBe(expectedBalance);
        expect(savingAccount.accountNumber).toBe(expectedAccountNumber);
        expect(savingAccount.owner).toBe(expectedOwner);

        expect(checkingAccount.balance).toBe(expectedBalance);
        expect(checkingAccount.accountNumber).toBe(expectedAccountNumber);
        expect(checkingAccount.owner).toBe(expectedOwner);
    });

    it('should deposit money into the account', () => {
        // Arrange
        const initialBalance = 1000;
        const depositAmount = 500;
        const expectedBalance = initialBalance + depositAmount;
        
        // Act
        const savingAccount = new SavingsAccount(initialBalance, '123456789', 'Emilio Resende');
        const checkingAccount = new CheckingAccount(initialBalance, '123456789', 'Emilio Resende');
        savingAccount.deposit(depositAmount);
        checkingAccount.deposit(depositAmount);
        
        // Assert
        expect(savingAccount.balance).toBe(expectedBalance);
        expect(checkingAccount.balance).toBe(expectedBalance);
    });

    it('should withdraw money from the savings account', () => {
        // Arrange
        const initialBalance = 1000;
        const depositAmount = 500;
        const expectedBalance = initialBalance - depositAmount;
        
        // Act
        const account = new SavingsAccount(initialBalance, '123456789', 'Emilio Resende');
        account.withdraw(depositAmount);
        
        // Assert
        expect(account.balance).toBe(expectedBalance);
    });

    it('should withdraw money from the checking account', () => {
        // Arrange
        const initialBalance = 1000;
        const depositAmount = 500;
        const expectedBalance = initialBalance - depositAmount;
        
        // Act
        const account = new CheckingAccount(initialBalance, '123456789', 'Emilio Resende');
        account.withdraw(depositAmount);
        
        // Assert
        expect(account.balance).toBe(expectedBalance);
    });

    it('should withdraw money from the checking account using the overdraft', () => {
        // Arrange
        const initialBalance = 0;
        const withdrawAmount = 500;
        const overdraftLimit = 500;
        const expectedBalance = initialBalance - withdrawAmount;
        
        // Act
        const account = new CheckingAccount(initialBalance, '123456789', 'Emilio Resende', overdraftLimit);
        account.withdraw(withdrawAmount)

        // Assert
        expect(account.balance).toBe(expectedBalance);

    });

    it('should NOT withdraw money from the savings account if no funds', () => {
        // Arrange
        const initialBalance = 0;
        const withdrawAmount = 500;
        const expectedBalance = 0
        
        // Act
        const account = new SavingsAccount(initialBalance, '123456789', 'Emilio Resende');
        expect(() => account.withdraw(withdrawAmount)).toThrow('Withdraw amount must be lower than balance');
        
        // Assert
        expect(account.balance).toBe(initialBalance);
    });

    it('should transfer money from one account into another', () => {
        // Arrange
        const initialBalanceA = 1000;
        const initialBalanceB = 0;
        const transferAmount = 500;
        const expectedBalance = 500;
        
        // Act
        const accountA = new CheckingAccount(initialBalanceA, '123456780', 'Emilio Resende');
        const accountB = new SavingsAccount(initialBalanceB, '123456789', 'Emilio Resende 2');
        accountA.transfer(accountB, transferAmount);
        
        // Assert
        expect(accountA.balance).toBe(expectedBalance);
        expect(accountB.balance).toBe(expectedBalance);
    });
});