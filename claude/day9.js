
// Spread Operator to combined arrays ...
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const person = { name: "Usman", age: 23 };
const updated = { ...person, city: "Abuja" };
console.log(updated);
// { name: "Usman", age: 23, city: "Abuja" }


const morningTasks = ["exercise", "shower", "breakfast"];
const workTasks = ["coding", "push to GitHub", "Angela Yu"];

const allTasks = [...morningTasks, ...workTasks];
console.log(allTasks);


//Rest Parameters
function addAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

addAll(1, 2, 3, 4, 5); // 15
console.log(addAll(1, 2, 3, 4, 5));

function introduce(name, ...hobbies) {
    console.log(`My name is ${name} and my hobbies are: ${hobbies.join(", ")}`);
}

introduce("Usman", "coding", "reading", "gaming");