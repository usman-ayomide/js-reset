function wait(seconds) {
    return new Promise((resolve, reject) => {
        if(typeof seconds !== "number") {
            reject("seconds must be a number");
            return;
        }
        setTimeout(() => {
            resolve(`Done waiting ${seconds} seconds`);
        }, seconds * 1000);
    });
}

wait(2)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

wait("abc")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

async function run() {
    
    
    try{
        const msg1 = await wait(1);
        console.log(msg1);

        const msg2 = await wait(2);
        console.log(msg2);

        const msg3 = await wait(3);
        console.log(msg3);

        const msg4 = await wait(4);
        console.log(msg4);
    }
    catch(err){
        console.log(err);
    }
    
}
run();