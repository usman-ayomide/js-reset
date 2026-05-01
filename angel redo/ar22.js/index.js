let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).on("keydown", function(){

    if(!started){

        $("level-title").text("Level " + level);

        nextSequence();

        started = true;
    }
});

$(".btn").click(function(){
    
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log("Success");

        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else{
        let audio = new Audio("sounds/wrong.mp3");
        audio.play(); ;
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}

function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 3);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

function playSound(name){

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play(); 
}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}