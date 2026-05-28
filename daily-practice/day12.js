//revision on maps filter and reduce
const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 1200 },
    { id: 3, type: "credit", amount: 3500 },
    { id: 4, type: "debit", amount: 800 },
    { id: 5, type: "credit", amount: 2000 }
];

let onlyCredit = transactions.filter(function(transaction){
    return transaction.type === "credit";
});

let justAmount = onlyCredit.map(function(transaction){
    return transaction.amount;
});

let totalCredit = justAmount.reduce((accumulator, current) => accumulator + current, 0);
console.log(onlyCredit);
console.log(justAmount);
console.log(totalCredit);


let onlyArrowCredit = transactions.filter(transaction => transaction.type === "credit");
console.log(onlyArrowCredit);

let justArrowAmount = onlyArrowCredit.map(transaction => transaction.amount);
console.log(justArrowAmount);

let onlyArrowTotalCredit = justArrowAmount.reduce((accumulator, current) => accumulator + current, 0);
console.log(onlyArrowTotalCredit);


//Objects and this
const bankAccount = {
    owner: "Usman",
    balance: 10000,
    deposit: function(amount){
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    },

    withdraw: function(amount){
        if(amount > this.balance){
            console.log("Insufficient funds!")
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        }
    },

    getBalance: function (){
        console.log(`${this.owner} balance is ${this.balance}`);
    }

}
bankAccount.deposit(500);
bankAccount.withdraw(20000);
bankAccount.withdraw(200);
bankAccount.getBalance();