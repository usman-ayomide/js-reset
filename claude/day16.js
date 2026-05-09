function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1(); // ?
counter1(); // ?
counter1(); // ?
counter2(); // ?

function makeMultiplier(multiplier){
    return function(num){ 
        console.log(multiplier * num);
    }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const times10 = makeMultiplier(10);

double(5);   // 10
triple(5);   // 15
times10(5);  // 50