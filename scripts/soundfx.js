
// Loading the background music onload
// window.addEventListener("load", () => {
//     document.getElementById("img-speaker").addEventListener('click', playSound());
// })


function playSound() {
    var player = document.getElementById("casino-audio")
        (player.paused == true) ? soundOn(0) : soundOn(1)
}

function soundOn(state) {
    var player = document.getElementById("casino-audio");
    var src = "/audio/casino-pokemon.mp3";

    switch (state) {
        case 0:
            player.src = src;
            player.load();
            player.play();
            player_state = 1;
            break;
        case 1:
            player.pause();
            player.currentTime = 0;
            player.src = "";
            player_state = 0;
            break;
    }
}



// function playSound() {
//     var audio = document.getElementById("casino-audio");
//     audio.play()
// }

// function muteSound() {
//     var player = document.getElementById("casino-audio");
//     player.pause();
//     player.src = player.src;
// }

