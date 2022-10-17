class Main{
    constructor(){

        this.sonido = new Sound()
        this.f1=new formulario(this.sonido)
        this.f1.call();
        
        this.menu = new MainMenu(this.sonido)
        this.waiting = new MainWaitings(this.sonido)
        this.tablero= new clsBoard(12,12)
        this.casilla= new clsCasilla(12,12,this.sonido)
        this.personaje=new MainPersonaje(this.sonido)
        this.pregunta = new Preguntas(this.sonido)
        this.finales = new Finales(this.sonido)
        this.socket = new Socket(this.menu,this.f1,this.waiting,this.tablero,this.casilla,this.personaje,this.pregunta, this.finales, this.sonido)

        
    }

    
}

const a = new Main