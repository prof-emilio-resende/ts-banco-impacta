export abstract class BankAccount {
    constructor(
        public balance: number,
        public accountNumber: string,
        public owner: string
    ) {
        if (balance < 0) {
            throw new Error('Balance cannot be negative');
        }
        if (!accountNumber || !owner) {
            throw new Error('Account number and owner are required');
        }
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error('Withdraw amount must be positive');
        }

        if (amount > this.balance) {
            throw new Error('Withdraw amount must be lower than balance');
        }

        this.balance -= amount;
    }

    transfer(targetAccount: BankAccount, amount: number): void {
        if (amount <= 0) {
            throw new Error('Transfer amount must be positive');
        }

        this.withdraw(amount);
        targetAccount.deposit(amount);
    }
}

export class SavingsAccount extends BankAccount {}
export class CheckingAccount extends BankAccount {
    constructor(public balance: number,
        public accountNumber: string,
        public owner: string,
        public overdraftLimit: number = 0) {
            super(balance, accountNumber, owner);
        }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error('Withdraw amount must be positive');
        }

        if (amount > this.balance + this.overdraftLimit) {
            throw new Error('Withdraw amount must be lower than balance');
        }

        this.balance -= amount;
    }
}
