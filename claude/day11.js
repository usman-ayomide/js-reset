setTimeout(function(){
    console.log("Go!");
}, 3000);


let count = 5;

let timer = setInterval(function(){
    console.log(count);
    count--;
    
    if(count === 0){
        clearInterval(timer);
    }
}, 1000);