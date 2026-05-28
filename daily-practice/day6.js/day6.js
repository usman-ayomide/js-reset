// 1. Write a function declaration called "multiply" 
//    that takes two numbers and returns the result

// 2. Write the same function as a function expression

// 3. Write an arrow function version

// 4. Create a variable called "score" outside any function
//    Create a function called "updateScore" that adds 10 to score
//    Log score before and after calling the function

// 5. Try to access a variable declared inside a function
//    from outside it — log the error you get

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(1, 2));

let multiplyExpression = function(num1, num2){
    return num1 * num2;
}
console.log(multiplyExpression(3, 4));

let multiplyArrow = (num1, num2) => {
    return num1 * num2;
}
console.log(multiplyArrow(5, 6));

let score = 0;
function updateScore(){
    score = score + 10;
}
console.log(score);
updateScore();
console.log(score);

function secretFunction() {
    let secret = "I'm hidden";
}

//console.log(secret); 



// Build a simple calculator object
// It should have 4 methods: add, subtract, multiply, divide
// Each method takes two numbers and returns the result
// Divide should handle division by zero — return "Cannot divide by zero"

const calculator = {
    // write your methods here
    add(num1, num2){
        return num1 + num2;
    }, 
    subtract(num1, num2){
        return num1 - num2;
    },
    multiply(num1, num2){
        return num1 * num2;
    },
    divide(num1, num2) {
        if(num2 == 0) {
            return "Cannot divide by zero";
        } 
        else {
            return num1 / num2;
        }
    }
}

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 0));
console.log(calculator.divide(10, 2));