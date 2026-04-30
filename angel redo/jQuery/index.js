//placing above the index.js script
$("h1").css("color", "red");

//if the jquery script is placed in the head section, the the .ready function is used 
$(document).ready(function() {
    $("h1").css("color", "green");
})

// having one property mean getting the property

//to add class
$("h1").addClass("big-title");

//to remove class
$("h1").removeClass("big-title");

//adding multiple class
$("h1").addClass("big-title margin-50");

//to query if element has a class
$("h1").hasClass("margin-50");

//to change text
$("h1").text("Bye");

//eventListener
$("input").keydown(function(event){
    $("h1").text(event.key);
});