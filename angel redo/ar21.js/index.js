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
10. add event listener to listen for keypress
11. create a function that takes in key as parameter and relocate the switch statement into it
12. call the new function inside the click event listener passing in button inerr html
13. log event,key in the key event listener
14. outside the loop, create a function that animates the button, it should take inn thr current key being preesed
15. call the function in the two sectons above 
16. add a classlist to your css file
17. get the class of the key being pressed, add the classlist to it, store it in a variable
18. add a timeout function to remove the class after some seconds
*/

numberOfDrum = document.querySelectorAll(".drum").length;

for(var  i = 0; i < numberOfDrum; i++){
    
    //detecting click to play sound
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });


    // detecting key to play sound
    document.addEventListener("keydown", function(event){
        
        makeSound(event.key);
        animation(event.key);
    });

    
    function makeSound(key){
        switch (key) {
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
                console.log(key);
        }
    }
}

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}