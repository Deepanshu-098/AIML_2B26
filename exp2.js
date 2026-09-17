// Experiment 2
class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
     deposit(amount) {
        this.balance = this.balance+amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        } else {
            this.balance = this.balance-amount;
            console.log("Withdrawn:", amount);
        }
    }
    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
    }
     static bankInfo() {
        console.log("Bank Name: Canara Bank");
        console.log("Safe and Secure Banking");
    }
}
    let account1 = new BankAccount(101, "Dee", 5000);
    let account2 = new BankAccount(102, "Jazz", 3000);

    BankAccount.bankInfo();

    console.log("Account 1 Transactions:");

    account1.deposit(2000);
account1.withdraw(1000);
account1.displayBalance();

console.log("Account 2 Transactions:");

account2.deposit(1000);
account2.withdraw(5000);
account2.displayBalance();
