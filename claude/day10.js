//Keyboard events
const counter = {
    count: 0,
    increment: function(){
        this.count += 1;
        console.log(this.count);
    },
    reset: function(){
        this.count = 0;
        console.log(this.count);
    }

    
}
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());