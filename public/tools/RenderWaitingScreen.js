class MainWaitings {
    constructor(sonido){
        this.sonido = sonido
        this.waitScreen = document.createElement('div')
        this.textoPantalla = document.createElement('h1')
        this.dot1 = document.createElement('div')
        this.dot2 = document.createElement('div')
        this.dot3 = document.createElement('div')
        this.botonCancelar = document.createElement('button')
        
    }

    Call(){
        const containerFather = document.getElementById('container-father')
        containerFather.innerHTML = ''
        this.SetAtributes();
        this.Render();
        this.DotMovement();
        this.Keydowns();
    }

    SetAtributes(){
        this.waitScreen.setAttribute('class','waitingscreen');
        this.waitScreen.setAttribute('id','waitingSText');

        this.textoPantalla.innerHTML = "ESPERANDO JUGADOR";
        this.textoPantalla.classList.add('waitingH1')

        this.dot1.setAttribute('class','dot')
        this.dot1.innerHTML = '&#9679;';

        this.dot2.setAttribute('class','dot')
        this.dot2.innerHTML = '&#9679;';

        this.dot3.setAttribute('class','dot')
        this.dot3.innerHTML = '&#9679;';

        this.botonCancelar.setAttribute('id','bCancelar')
        this.botonCancelar.setAttribute('class','botonCan')
        this.botonCancelar.innerHTML = 'Cancelar'

    }

    Keydowns(){
        document.addEventListener('keydown', (e)=>{
            if (e.key==='c') {
                document.getElementById('bCancelar').click();
            }
        });
    }

    DotMovement(){

        let rootElements = document.querySelectorAll("div.dot");
        let i = 0;
        
        setInterval(() => {
          rootElements[i].style = "";
          i=++i%rootElements.length;
          rootElements[i].style.top = "0px";
          rootElements[i].style.opacity = 1;
        }, 350);
        }

    Render(){
        this.waitScreen.appendChild(this.textoPantalla)
        this.waitScreen.appendChild(this.dot1)
        this.waitScreen.appendChild(this.dot2)
        this.waitScreen.appendChild(this.dot3)
        this.waitScreen.appendChild(this.botonCancelar)
        document.getElementById('container-father').appendChild(this.waitScreen)
        speechSynthesis.cancel()
        this.sonido.renderSound('Esperando a un jugador, si lo desea recuerde que puede cancelar presionando la tecla c')
    }


}