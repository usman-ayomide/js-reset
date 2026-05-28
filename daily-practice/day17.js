function makeTimer(num){
    
    let timer = null;

    return {
        start: function(){
           timer = setInterval(() => {
            console.log(num);
            num--;
           }, 1000);
            
        },
        stop: function(){
            if(num < 0){ 
                clearInterval(timer); return; 
            }
            
        }
    }
    
}

const timer1 = makeTimer(10); // counts down from 10
const timer2 = makeTimer(5);  // counts down from 5

timer1.start(); // logs 10, 9, 8... every second
timer2.start(); // logs 5, 4, 3... every second independently
//timer1.stop();  // stops timer1 without affecting timer2