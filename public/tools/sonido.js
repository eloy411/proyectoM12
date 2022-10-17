class Sound{

    constructor(){
        this.mensaje1 = new SpeechSynthesisUtterance()
        this.mensaje1.lang = 'es-ES';
        this.mensaje1.volume = 1;
        this.mensaje1.rate = 0.8;
        this.mensaje1.pitch = 1;
    }

    renderSound(text){

        this.mensaje1.text = text

        speechSynthesis.speak(this.mensaje1)
    }

    

}