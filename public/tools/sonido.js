class Sound{

    constructor(){
        this.mensaje1 = new SpeechSynthesisUtterance()
        this.mensaje1.lang = 'es-ES';
        this.mensaje1.volume = 1;
        this.mensaje1.rate = 0.8;
        this.mensaje1.pitch = 1;
    }

    sonidoInicioP(){
        var sonido_inicioP = new Audio("audio/SONIDO_INICIO_PARTIDA.mp3");
        sonido_inicioP.play();
    }
    
    renderSound(text){
        console.log('sonando')

        this.mensaje1.text = text

        speechSynthesis.speak(this.mensaje1)
    }

        sonidoCarcel(){
        var sonido_Carcel = new Audio("audio/SONIDO_CARCEL.mp3");
        sonido_Carcel.play();
    }

    sonidoLaberinto(){
        var sonido_Laberinto = new Audio("audio/SONIDO_LABERINTO.mp3");
        sonido_Laberinto.play();
    }

    sonidoCasilla(){
        var sonido_Casilla = new Audio("audio/SONIDO_CASILLA_CAIDA.mp3");
        sonido_Casilla.play();
    }

    sonidoCorrecto(){
        var sonido_Correcto = new Audio("audio/SONIDO_CORRECTO.mp3");
        sonido_Correcto.volume = 0.5
        sonido_Correcto.play();
    }

    sonidoIncorrecto(){
        var sonido_Incorrecto = new Audio("audio/SONIDO_INCORRECTO.mp3");
        sonido_Incorrecto.volume = 0.5
        sonido_Incorrecto.play();
    }

    sonidoGameover(){
        var sonido_Gameover = new Audio("audio/SONIDO_GAME_OVER.mp3");
        sonido_Gameover.play();
    }

    sonidoMuerte(){
        var sonido_Muerte = new Audio("audio/SONIDO_MUERTE.mp3");
        sonido_Muerte.play();
    }

    sonidoWin(){
        var sonido_Win = new Audio("audio/SONIDO_WIN.mp3");
        sonido_Win.play();
    }

}