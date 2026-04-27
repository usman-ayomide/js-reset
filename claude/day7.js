/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(numbers){
    console.log(numbers);
});


let doubled = numbers.map(function(num){
    return num * 2;
});
let even = numbers.filter(function(num){
    return num % 2 === 0;   
});

numbers.forEach(numbers => {console.log(numbers);});
let doubledArrow = numbers.map(num => {return num * 2});
let evenArrow = numbers.filter(num => {return num % 2 === 0});

*/

const students = [
    { name: "Aisha", score: 45 },
    { name: "Emeka", score: 72 },
    { name: "Tunde", score: 55 },
    { name: "Fatima", score: 88 },
    { name: "Chidi", score: 36 }
];

let student60score = students.filter(student => student.score >= 60);

let justNames = student60score.map(student => student.name);

justNames.forEach(name => console.log(name));