class Main{
    constructor(){

        this.f1=new formulario()
        this.f1.call();
        this.menu = new MainMenu()
        this.waiting = new MainWaitings()
        this.tablero= new clsBoard(12,12)
        this.casilla= new clsCasilla(12,12)
        this.personaje=new MainPersonaje()
        this.pregunta = new Preguntas()
        this.finales = new Finales()
        this.socket = new Socket(this.menu,this.f1,this.waiting,this.tablero,this.casilla,this.personaje,this.pregunta, this.finales)

        
    }

    
}

const a = new Main