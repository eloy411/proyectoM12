
function logout(){
    alert("YO SALGO DE LA CUENTA");
}

////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////

function changeLan(){
    let btn = document.getElementById("chLang_b");
    let btn2 = document.getElementById("createGame_b")
    let btn3 = document.getElementById("joinGame_b")
    let btn4 = document.getElementById("exit_b")

    if(btn.innerText === "CAMBIAR IDIOMA"){
        btn.innerText = "CHANGE LANGUAJE";
    }else{
        btn.innerText= "CAMBIAR IDIOMA";
    }

    if(btn2.innerText === "CREAR PARTIDA"){
        btn2.innerText = "CREATE GAME";
    }else{
        btn2.innerText= "CREAR PARTIDA";
    }

    if(btn3.innerText === "UNIRSE A PARTIDA"){
        btn3.innerText = "JOIN GAME";
    }else{
        btn3.innerText= "UNIRSE A PARTIDA";
    }

    if(btn4.innerText === "SALIR"){
        btn4.innerText = "EXIT";
    }else{
        btn4.innerText= "SALIR";
    }
};

////////////////////////////////////////////////////////////

function audio_Autoplay(){
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "audio/voz_inicio.mp3")
    etiquetaAudio.volume = 1;
    etiquetaAudio.play()
}

////////////////////////////////////////////////////////////

function muteUnmute(){
        var myAudio = document.getElementById("musicaM");
        let imgUnmute = document.getElementById("unMute")
        if(myAudio.paused) {
            myAudio.play();
            imgUnmute.src = 'img/speaker.png'
        }
        else {
           myAudio.pause();
           imgUnmute.src = 'img/speaker_muted.png'
        }
    }

////////////////////////////////////////////////////////////


