//call backs 
function calculate(num1, num2, callBack){
    let myFood = callBack(num1, num2);
    console.log(myFood);
}

calculate(8, 7, function(num1, num2){
    return num1 * num2;
});

calculate(8, 7, function(num1, num2){return num1 + num2});

//Literal ES6
const firstName = "Usman";
const day = 8;
const topic = "callbacks";
//Usman is on day 8 and just learned callbacks.

console.log(`${firstName} is on day ${day} and just learned ${topic}`);

//Destructuring
const course = {
    title: "JavaScript",
    duration: 90,
    instructor: "Angela Yu"
};

const {title, duration, instructor} = course;
console.log(`Usman is running a ${duration} day learning challenge and he is curerently using ${instructor} ${title} course.`);


//Defualt Parameters
function greet(name = "stranger") {
    console.log(`Hello ${name}`);
}

greet("Usman");  // Hello Usman
greet();         // Hello stranger
//My name is Usman and I am learning JavaScript.

function introduce(name, language = "JavaScript"){
    console.log(`My name is ${name} and I am learning ${language}`);
}
introduce("Usman");
introduce("Usman", "JavaScript");
introduce("Usman", "Python");