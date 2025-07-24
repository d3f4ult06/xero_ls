// Single song autoplay
document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("loading");
    audioPlayer.src = "song/reidictsong.mp3";
    audioPlayer.volume = 0.2;
    document.getElementById("songname").innerHTML = "by Reidict";
    
    // Attempt autoplay
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay was prevented:", error);
        });
    }
});

// Volume control
window.addEventListener('keyup', function(e) {
    const audioPlayer = document.getElementById("loading");
    if (e.which == 38) { // ArrowUP - increase volume
        audioPlayer.volume = Math.min(audioPlayer.volume + 0.025, 1);
    } else if (e.which == 40) { // ArrowDOWN - decrease volume
        audioPlayer.volume = Math.max(audioPlayer.volume - 0.025, 0);
    }
});

// Mute/unmute toggle
var audio = document.querySelector('audio');
if (audio) {
    window.addEventListener('keydown', function(event) {
        if (event.which === 32) { // Spacebar
            event.preventDefault();
            const textElement = document.getElementById("text");
            audio.paused ? audio.play() : audio.pause();
            textElement.innerText = audio.paused ? "MUTE" : "UNMUTE";
        }
    });
}

// Loading animation text
var shadedText = document.querySelector('.shaded-text');
var texts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
var currentText = 0;

setInterval(function() {
    currentText = (currentText + 1) % texts.length;
    shadedText.classList.remove('fade-out');
    void shadedText.offsetWidth;
    shadedText.classList.add('fade-out');
    setTimeout(function() {
        shadedText.textContent = texts[currentText];
    }, 1000);
}, 4000);

// Name placeholder from Lua
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#namePlaceholder > span').innerText = window.nuiHandoverData.name;
});