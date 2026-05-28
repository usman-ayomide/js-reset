const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 450 },
    { name: "Monitor", price: 950 },
    { name: "Keyboard", price: 150 }
];

//array.sort((a, b) => a > b ? 1 : -1)
const price = products.sort((a, b) => a.price > b.price ? 1 : -1);
console.log(price);

const alpha = products.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(alpha);

// expected: 3550

const expected = products.reduce(function(total, product){
    return total + product.price;
}, 0);
console.log(expected);

//{ name: "Laptop", price: 1200 }
const expensive = products.reduce((a, b) => a.price > b.price ? a : b);
    console.log(expensive);


const group = products.reduce(function(obj, product){
    // figure out which group this product belongs to
    if(product.price < 500){
        // if obj.budget doesn't exist yet, create it
        if(!obj.budget){ obj.budget = []; }
        obj.budget.push(product.name);
    }
    // add else if for mid and premium
    else if(product.price < 1000){
        if(!obj.mid){
            obj.mid = []
        }
        obj.mid.push(product.name);
    }
    else{
        if(!obj.premium){obj.premium = []}
        obj.premium.push(product.name);
    }
    
    return obj; // always return the accumulator
}, {}); // start with empty object

console.log(group);