// 1. Select the h1 by id and change its text to your name
// 2. Select the paragraph by class and change its color to red
// 3. Select the button and add a click event listener
//    that alerts "You clicked the button!" when clicked

document.getElementById("title").innerText = "Usman";
document.querySelector(".description").style.color = "red";
document.getElementById("btn").addEventListener("click", function(){
    alert("You clicked the button!");
});

document.getElementById("addBtn").addEventListener("click", function(){
    let name = document.getElementById("nameInput").value;
    let li = document.createElement("li");
    li.innerText = name;
    document.getElementById("nameList").appendChild(li);
    document.getElementById("nameInput").value = "";
});
