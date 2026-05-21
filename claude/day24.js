class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient balance")
        }
        else{
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        }   
    }
    getBalance(){
        console.log(`Account Name: ${this.owner} : Balance: ${this.balance}`);
    }
    static compareBalances(acc1, acc2){
        if(acc1.balance > acc2.balance){
            console.log(`${acc1.owner} has more money`);
        }
        else{
            console.log(`${acc2.owner} has more money`);
        }
    }
}

const acc1 = new BankAccount("James", 1000);
const acc2 = new BankAccount("Mike", 2500);

acc1.deposit(200);
acc1.withdraw(500);
acc1.withdraw(5000);
acc1.getBalance()
BankAccount.compareBalances(acc1, acc2);