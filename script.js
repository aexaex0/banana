document.getElementById("playBtn").addEventListener("click", () => {  
    let audio = new Audio("banana.mp3");  
    audio.volume = 1.0; // sets max volume  
    audio.play();  
});
