// Task 1
let name = "Usman";
let age = 23;
let employed = false;

console.log(name, age, employed);

//difference between two numbers 
var x = 1;
let y = 2;
const z = 3;
console.log(z);
// var vs let vs const
/*they are all variables but 
var is not blockscoped and can be changed at any point in the file
let = is blockscoped, can be changed and can't be redeclared
const = is blockscoped, cannot be changed and can't be redeclared*/


// Task 2
//Normal function
function biggerNumber (num1, num2){
    if(num1 > num2) {
        return(num1);
    }
    else{
        return(num2);
    }
}
console.log(biggerNumber(1, 2));

//arrow function
let bigNumber = (num1, num2) => {
   if(num1 > num2) {
        return(num1);
    }
    else{
        return(num2);
    } 
}
console.log(bigNumber(4, 2));

//Task 3
let numbers = [4, 9, 2, 17, 3, 8, 1];

function findLargest(arr) {
    let largest = arr[0]; 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    
    return largest;
}

console.log(findLargest(numbers));