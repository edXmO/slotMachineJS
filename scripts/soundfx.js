
// Background music onload

// var audio = document.getElementById("casino-audio");

window.addEventListener("click", () => {
    document.getElementById("img-speaker").addEventListener('click', soundSwitch(document.getElementById("casino-audio")));

})

// Button turning on/off audio -
function soundSwitch(music) {
    currentValue = document.getElementById('img-speaker').value;
    if (currentValue == "off") {
        document.getElementById('img-speaker').value = "on";
        document.getElementById('img-speaker').src = "/img/speaker-on.png";
        music.play()
    } else {
        document.getElementById('img-speaker').value = "off";
        document.getElementById('img-speaker').src = "/img/speaker-off.png";
        music.pause();
    }
}

