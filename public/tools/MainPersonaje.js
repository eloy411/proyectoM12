class MainPersonaje {
    constructor(){
        this.c_personaje = document.createElement('div')
        this.personaje = document.createElement('img')
        this.numCasilla =0
        this.valorCasilla = 0
        this.casilla= {}
        this.trampa=0
        
    }

    Call(){
        this.SetAtributes();
        this.Render();
    }

    SetAtributes(){
        this.c_personaje.setAttribute('class','c_personaje');
        this.personaje.setAttribute('class','personaje_')
        this.personaje.setAttribute('id','personaje')
        this.personaje.setAttribute('src','img/personaje.png')
    }

    Render(){
        this.c_personaje.appendChild(this.personaje)
        document.getElementById('container-father').appendChild(this.c_personaje)
    }

    

    movimiento(condition){/**condition es booleano TRUE-respuesta correcta avanza, FALSE-al contrario */

            if(condition){
                this.casilla = document.getElementById(`casilla-x-${this.numCasilla+this.valorCasilla}`)
                
                this.numCasilla += this.valorCasilla
                

                if(this.numCasilla == 9 || this.numCasilla == 25 || this.numCasilla == 37 || this.numCasilla == 52  || this.numCasilla == 75){

                    this.movimientoEspacial()

                    if(this.numCasilla == 9||this.numCasilla == 37){

                        this.trampa=2
                       
                    }else if(this.numCasilla == 25||this.numCasilla == 52){

                        this.trampa=4

                    }else if(this.numCasilla == 75){
                    
                    this.trampa = 666}
                }else{

                    this.movimientoEspacial()
                }

            }else{
                this.casilla = document.getElementById(`casilla-x-${this.numCasilla-this.valorCasilla}`)

                this.numCasilla -= this.valorCasilla

                if(this.numCasilla == 9 || this.numCasilla == 25 || this.numCasilla == 37 || this.numCasilla == 52  || this.numCasilla == 75){

                    this.movimientoEspacial()
                    if(this.numCasilla == 9||this.numCasilla == 37){

                        this.trampa=2

                    }else if(this.numCasilla == 25||this.numCasilla == 52){

                        this.trampa=4
                        
                    }else if(this.numCasilla == 75){
                    
                        this.trampa = 666}
                }else{
                    this.movimientoEspacial()
                }

                
            }
            
                
    }

    movimientoEspacial(){

        let coords = this.casilla.getBoundingClientRect()
        let top = coords.top * 100 / window.innerHeight
        let left = coords.left * 100 / window.innerWidth
        this.valorCasilla = parseInt(this.casilla.children[0].textContent)
        
        this.c_personaje.style.top = `${top+1}%`
        this.c_personaje.style.left = `${left+2.2}%`
        this.trampa=0
    }
}