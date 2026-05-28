let numbers = [1, 2, 3, 4, 5];

//map = double every number
let doubled = numbers.map(function(num){
    return num *2;
});
console.log(doubled);
//filter = keep number above 3
let above3 = numbers.filter(function(num){
    return num > 3
});
console.log(above3);

//Task 1
let products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 200 },
    { name: "Tablet", price: 950 },
    { name: "Charger", price: 50 }
];

let productUnder1000 = products.filter(function(product){
    return product.price < 1000;
});
console.log(productUnder1000);

let newArray = products.map(function(product){
    return product.name;
});
console.log(newArray);

let discount = products.map(function(product){
    return product.price * 0.9;
});
console.log(discount);

let cost1500 = products.forEach(function(product){
        console.log(product.name + " costs $" + product.price);
});