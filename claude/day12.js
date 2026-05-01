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