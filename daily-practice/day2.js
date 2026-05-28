//Task 1
let cities = ["Lagos", "Abuja", "Kano", "Kaduna", "Port Harcourt"];

console.log(cities[0]);
console.log(cities[2]);
console.log(cities[cities.length - 1]);

//Task 2
let skills = ["HTML", "CSS", "Git"];

skills.push("JavaScript");
let removed = skills.pop();
console.log(removed);
console.log(skills.includes("CSS"));
console.log(skills);

//task 3
let transactions = [500, 1200, 350, 780, 920];

transactions.forEach(function(transaction){
    console.log(transaction);
});
transactions.forEach(function(transaction){
    if(transaction > 700){
        console.log(transaction);
    }
});

let total = 0;
transactions.forEach(function(transaction) {
    total = total + transaction;
});

console.log(total);