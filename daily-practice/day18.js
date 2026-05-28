const orders = [
    { id: 1, customer: "Aisha", items: ["burger", "fries", "coke"], total: 4500 },
    { id: 2, customer: "Emeka", items: ["pizza", "juice"], total: 6200 },
    { id: 3, customer: "Fatima", items: ["burger", "juice"], total: 3800 },
    { id: 4, customer: "Tunde", items: ["pizza", "fries", "coke"], total: 5100 },
    { id: 5, customer: "Chidi", items: ["burger", "fries"], total: 2900 }
];

const above4000 = orders.filter(order => order.total > 4000);
console.log(above4000);

const name4000 = above4000.map(order => order.customer);
console.log(name4000);

const revenue = orders.reduce((total, order) => total + order.total, 0);
console.log(revenue);

const find = orders.find(order => order.customer === "Fatima");
console.log(find);

const sort = orders.sort((a, b) => a.total > b.total ? 1 : -1);
console.log(sort);

const some = orders.some(order => order.items.includes("pizza"));
console.log(some);

const every = orders.every(order => order.items.includes("burger"));
console.log(every);