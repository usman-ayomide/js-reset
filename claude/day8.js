function calculate(num1, num2, callBack){
    let myFood = callBack(num1, num2);
    console.log(myFood);
}

calculate(8, 7, function(num1, num2){
    return num1 * num2;
});

calculate(8, 7, function(num1, num2){return num1 + num2});