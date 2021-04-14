document.addEventListener("keydown", function (e) {
    if (e.code == "KeyA") {
        let audio = new Audio("white_keys/A.mp3");
        audio.play();
        document.getElementById("A").style.backgroundColor = "gray";
    } else if (e.code == "KeyS") {
        let audio = new Audio("white_keys/S.mp3");
        audio.play();
        document.getElementById("S").style.backgroundColor = "gray";
    } else if (e.code == "KeyD") {
        let audio = new Audio("white_keys/D.mp3");
        audio.play();
        document.getElementById("D").style.backgroundColor = "gray";
    } else if (e.code == "KeyF") {
        let audio = new Audio("white_keys/F.mp3");
        audio.play();
        document.getElementById("F").style.backgroundColor = "gray";
    } else if (e.code == "KeyG") {
        let audio = new Audio("white_keys/G.mp3");
        audio.play();
        document.getElementById("G").style.backgroundColor = "gray";
    } else if (e.code == "KeyH") {
        let audio = new Audio("white_keys/H.mp3");
        audio.play();
        document.getElementById("H").style.backgroundColor = "gray";
    } else if (e.code == "KeyJ") {
        let audio = new Audio("white_keys/J.mp3");
        audio.play();
        document.getElementById("J").style.backgroundColor = "gray";

        // -BLACK KEYS- //

    } else if (e.code == "KeyW") {
        let audio = new Audio("black_keys/W.mp3");
        audio.play();
        document.getElementById("W").style.backgroundColor = "gray";
    } else if (e.code == "KeyE") {
        let audio = new Audio("black_keys/E.mp3");
        audio.play();
        document.getElementById("E").style.backgroundColor = "gray";
    } else if (e.code == "KeyT") {
        let audio = new Audio("black_keys/T.mp3");
        audio.play();
        document.getElementById("T").style.backgroundColor = "gray";
    } else if (e.code == "KeyY") {
        let audio = new Audio("black_keys/Y.mp3");
        audio.play();
        document.getElementById("Y").style.backgroundColor = "gray";
    } else if (e.code == "KeyU") {
        let audio = new Audio("black_keys/U.mp3");
        audio.play();
        document.getElementById("U").style.backgroundColor = "gray";
    }
    else console.log ("Warning! Wrong key is pressed!");
})

document.addEventListener("keyup", function (e) {
    if (e.code == "KeyA") {
        document.getElementById("A").style.backgroundColor = "white";
    } else if (e.code == "KeyS") {
        document.getElementById("S").style.backgroundColor = "white";
    } else if (e.code == "KeyD") {
        document.getElementById("D").style.backgroundColor = "white";
    } else if (e.code == "KeyF") {
        document.getElementById("F").style.backgroundColor = "white";
    } else if (e.code == "KeyG") {
        document.getElementById("G").style.backgroundColor = "white";
    } else if (e.code == "KeyH") {
        document.getElementById("H").style.backgroundColor = "white";
    } else if (e.code == "KeyJ") {
        document.getElementById("J").style.backgroundColor = "white";
    }

    // -BLACK KEYS- //

      else if (e.code == "KeyW") {
        document.getElementById("W").style.backgroundColor = "black";
    } else if (e.code == "KeyE") {
        document.getElementById("E").style.backgroundColor = "black";
    } else if (e.code == "KeyT") {
        document.getElementById("T").style.backgroundColor = "black";
    } else if (e.code == "KeyY") {
        document.getElementById("Y").style.backgroundColor = "black";
    } else if (e.code == "KeyU") {
        document.getElementById("U").style.backgroundColor = "black";
    }
})