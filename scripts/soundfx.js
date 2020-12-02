// Button turning on/off audio 
function soundSwitch() {
    currentValue = document.getElementById('img-speaker').value;
    if (currentValue == "off") {
        document.getElementById('img-speaker').value = "on";
        document.getElementById('img-speaker').src = "/img/speaker-on.png";
        document.getElementById("casino-audio").play()
    } else {
        document.getElementById('img-speaker').value = "off";
        document.getElementById('img-speaker').src = "/img/speaker-off.png";
        document.getElementById("casino-audio").pause();
    }
}

//Insert coin sound fx
function soundInsertCoin() {
    if (document.getElementById('input-coins').disabled != false) {
        document.getElementById('btn-1').addEventListener('click', document.getElementById('insert-sound').play());
    }
}
