const diceImages = [ 
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];
document.querySelector("button").addEventListener("click", function() {
  
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;


    let shownDice1 = diceImages[diceRoll1];
    document.querySelector(".img1").setAttribute("src", shownDice1);

    let shownDice2 = diceImages[diceRoll2];
    document.querySelector(".img2").setAttribute("src", shownDice2);

    if(diceRoll1 > diceRoll2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if(diceRoll2 > diceRoll1){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
});