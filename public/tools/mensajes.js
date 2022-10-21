class Finales {

    constructor(sonido) {

        this.container = document.getElementById('container-father')

        this.endGame = document.createElement('div')
        this.endGame.classList.add('game-over-div')
        this.endGameText = document.createElement('h1')


        this.mensajePantalla = document.createElement('div')
        this.mensajePantalla.id = 'mensaje-pantalla'
        this.mensajePantalla.classList.add('game-over-div')
        this.mensajePantallaText = document.createElement('h1')
        this.sonido = new Sound()

        this.numero = document.createElement('h1')
        this.numero.classList.add('numero-mensaje')
        this.numero.id = 'numero-mensaje'

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

    renderMensaje(condition, valor) {

        this.numero.innerText = valor

        if (condition) {
            speechSynthesis.cancel()
            this.sonido.renderSound(`respuesta cncorrecta,avanzas ${valor}`)
            this.mensajePantalla.classList.add('mensaje-correcto')
            this.mensajePantallaText.innerText = 'CORRECTO!'
            this.mensajePantalla.appendChild(this.mensajePantallaText)
            this.numero.classList.add('numero-mensaje-correcto')
            this.mensajePantalla.appendChild(this.numero)

        } else {
            speechSynthesis.cancel()
            this.sonido.renderSound(`respuesta incorrecta,retrocedes ${valor}`)
            this.mensajePantalla.classList.add('mensaje-incorrecto')
            this.mensajePantallaText.innerText = 'INCORRECTO.... :('
            this.mensajePantalla.appendChild(this.mensajePantallaText)
            this.numero.classList.add('numero-mensaje-incorrecto')
            this.mensajePantalla.appendChild(this.numero)

        }

        this.container.appendChild(this.mensajePantalla)

    }

    renderError(message) {
        speechSynthesis.cancel()
        this.sonido.renderSound(`${message}, introduzca otro nombre`)
        this.mensajePantalla.classList.add('mensaje-incorrecto')
        this.mensajePantallaText.innerText = message
        this.mensajePantalla.appendChild(this.mensajePantallaText)
        this.mensajePantalla.style.marginBottom = '30%'
        this.container.appendChild(this.mensajePantalla)

    }

    removeMensaje() {

        document.getElementById('mensaje-pantalla').classList.remove('mensaje-correcto')
        document.getElementById('mensaje-pantalla').classList.remove('mensaje-incorrecto')
        document.getElementById('numero-mensaje').classList.remove('numero-mensaje-correcto')
        document.getElementById('numero-mensaje').classList.remove('numero-mensaje-incorrecto')
        document.getElementById('numero-mensaje').remove()
        document.getElementById('mensaje-pantalla').remove()
        
    }

}