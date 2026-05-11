//elements
const player = document.querySelector(".player");//the entire div
const video = player.querySelector(".viewer");//the video
const progress = player.querySelector(".progress");//the video progress
const progressBar = player.querySelector(".progress__filled");//progress bar
const toggle = player.querySelector(".toggle");//play button
const skipButtons = player.querySelectorAll("[data-skip]");//skip
const ranges = player.querySelectorAll(".player__slider");//vol and speed
const fullscreen = player.querySelector(".fullscreen");//fullscreen

//functions
function togglePlay(){
    const method = video.paused ? "play" : "pause";//if pause, play and vice-versa
    video[method]();
}

function updateButton(){
    const icon = this.paused ? "►" : "⏸️";//if paused, show the second icon
    toggle.textContent = icon;//change the icon to the next
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip); 
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;//get the percentage of where the video has played reach
    progressBar.style.flexBasis = `${percent}%`;//update it
}

function scrub(event){
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//event listeners
video.addEventListener("click", togglePlay);//listen for click and play or pause
video.addEventListener("play", updateButton);//change button to pause
video.addEventListener("pause", updateButton);//change button to play
video.addEventListener("timeupdate", handleProgress);//

skipButtons.forEach(button => button.addEventListener("click", skip));//loop through all buttons, listen for click and skip 
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));//loop through all ranges, listen for any change and update the range
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));//loop through all ranges, listen for mouse movement and update the range

let mousedown = false; // default mouse down 
progress.addEventListener("click", scrub);// 
progress.addEventListener("mousemove", (event) => mousedown && scrub(event));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullscreen.addEventListener("click", function(){
    video.requestFullscreen();
});