function calculator(a, b, operator){
    return operator(a, b);
}
//add 
function add(a, b){
    return a + b;
}

//subtract
function subtract(a, b){
    return a - b;
}

//divide
function division(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

console.log(calculator (2, 5, multiply));