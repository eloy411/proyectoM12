class Finales {
    constructor() {
        this.container = document.getElementById('container-father')

        this.endGame = document.createElement('div')
        this.endGame.classList.add('game-over-div')
        this.endGameText = document.createElement('h1')


        this.mensajePantalla = document.createElement('div')
        this.mensajePantalla.id = 'mensaje-pantalla'
        this.mensajePantalla.classList.add('game-over-div')
        this.mensajePantallaText = document.createElement('h1')

    }

    renderFinal(condition) {

        if (!condition) {
            this.endGame.classList.add('game-over')
            this.endGameText.innerText = 'GAME OVER'
            this.endGame.appendChild(this.endGameText)
            this.container.appendChild(this.endGame)
        } else {
            this.endGame.classList.add('game-win')
            this.endGameText.innerText = 'YOU WIN'
            this.endGame.appendChild(this.endGameText)
            this.container.appendChild(this.endGame)
        }

    }

    renderMensaje(condition) {

        if (condition) {
            this.mensajePantalla.classList.add('mensaje-correcto')
            this.mensajePantallaText.innerText = 'CORRECTO!'
            this.mensajePantalla.appendChild(this.mensajePantallaText)
            this.container.appendChild(this.mensajePantalla)
        } else {
            this.mensajePantalla.classList.add('mensaje-incorrecto')
            this.mensajePantallaText.innerText = 'INCORRECTO.... :('
            this.mensajePantalla.appendChild(this.mensajePantallaText)
            this.container.appendChild(this.mensajePantalla)
        }

    }

    removeMensaje(){
        document.getElementById('mensaje-pantalla').classList.remove('mensaje-correcto')
        document.getElementById('mensaje-pantalla').classList.remove('mensaje-incorrecto')
        document.getElementById('mensaje-pantalla').remove()
    }
}