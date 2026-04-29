/*
1. create a function that handle clicks on button
2. get the buttons then add event listener to listen to the function when the button get clicked
3. turn it into a an anonymous function
4. get the number of drum buttons and store in a variable
5. loop through all the buttons starting from 0 to number of drum buttons
6. use a constructor to add sound to each click
7. add images to each drum 
8. store the inner html of each drum into a variable
9. add a switch case to play each audio
*/

numberOfDrum = document.querySelectorAll(".drum").length;

for(var  i = 0; i < numberOfDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
            var tom1 = new Audio("./tom-1.mp3");
            tom1.play();
            break;

            case "a":
            var tom2 = new Audio("./tom-2.mp3");
            tom2.play();
            break;

            case "s":
            var tom3 = new Audio("./tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio("./tom-4.mp3");
            tom4.play();
            break;

            case "j":
            var snare = new Audio("./snare.mp3");
            snare.play();
            break;

            case "k":
            var crash = new Audio("./crash.mp3");
            crash.play();
            break;

            case "l":
            var kickbass = new Audio("./kick-bass.mp3");
            kickbass.play();
            break; 
            
            default:
                console.log(buttonInnerHTML);
        }
    });
}