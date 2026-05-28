/*let person = {
    name: "Usman",
    age: 23,
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: false
};

console.log(person.name);
console.log(person.skills[1]);
person.isEmployed = true;
person.city = "Abuja";
console.log(person);
*/
let wallet = {
    owner: "Usman",
    balance: 5000,
    tokens: ["ETH", "BTC", "SOL"],
    transactions: [
        { type: "send", amount: 200 },
        { type: "receive", amount: 1500 },
        { type: "send", amount: 300 }
    ]
};
console.log(wallet.owner + " has a balance of " + wallet.balance);

console.log(wallet.tokens[1]);

let sendOnly = wallet.transactions.filter(function(transaction) {
    return transaction.type == "send";
});
console.log(sendOnly);

let amounts = wallet.transactions.map(function(transaction) {
    return transaction.amount;
});
console.log(amounts);

wallet.transactions.forEach(function(transaction) {
    console.log("Type: " + transaction.type + " | Amount: " + transaction.amount);
});