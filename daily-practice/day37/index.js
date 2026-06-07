import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


let random = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

async function numGame(){
    const guess = await ask("Guess: ");
    attempts++;

    const num = parseInt(guess);

    if(num < random) {
        console.log("Too low");
        await numGame(); 
    } else if(num > random) {
        console.log("Too high");
        await numGame(); 
    } else {
        console.log(`Correct in ${attempts} attempts`);
        return;
    }
}
//added comment will work on later

async function start() {
    random = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    await numGame();
    
    const playAgain = await ask("Play again? (yes/no): ");
    if(playAgain === "yes") {
        start(); 
    } else {
        rl.close();
    }
}
start();