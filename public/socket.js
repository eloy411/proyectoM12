class Socket {
    constructor(menu, form, waiting, board, casilla, personaje, pregunta, finales, sonido) {

        /**CLASES */
        this.form = form
        this.menu = menu
        this.waiting = waiting
        this.board = board
        this.casilla = casilla
        this.personaje = personaje
        this.pregunta = pregunta
        this.finales = finales

        this.sonido = sonido


        /**LISTENERS PARA LAS CLASES*/
        this.controlForm()
        this.controlMenu()
        this.controlRespuesta()


        /**PARAMETERS */
        this.invidencia = false
        this.turn = true
        this.preguntaNueva = {}
        this.contadorErrores = 0
        this.casillaDestruida = 0
        this.contadorTurnos = 0

        this.trampa = false
    }

    connect() {
        this.socket = io();

        this.invidencia = sessionStorage.getItem('invidencia') === 'true' ? true : false
        this.turn = this.invidencia

        this.escuchas();
    }


    /**SOCKETS LISTENERS */
    escuchas() {

        this.socket.on('confirmacion', (dato) => {
            console.log(dato)
            this.menu.CallMenu()
        })



        this.socket.on('createdRoom', (dato) => {
            sessionStorage.setItem('room', dato.room)
            this.waiting.Call()

        })



        this.socket.on('foundRoom', (dato) => {

            sessionStorage.setItem('room', dato.room)

            const container = document.getElementById('container-father')
            container.innerHTML = ''

            /**RENDER GAME */
            // console.log(dato.listaRandom)
            this.board.RenderBoard()
            this.casilla.MethodSwitch(dato.listaRandom)
            this.personaje.Call()
            this.personaje.movimiento(true)

            /**SEND SOCKET MESSAGE TO START */
            if (this.turn) {
                this.startGame()
            }

        })

        this.socket.on('send-pregunta', (data) => {

            this.preguntaNueva = data.pregunta

            /**BIENVENIDO */

            setTimeout(() => { this.popUp() }, [4000])

        })

        this.socket.on('change-pista', () => {

            this.turn = !this.turn


            if (this.turn) {
                this.contadorErrores++
            }

            this.pregunta.renderPista(this.preguntaNueva, this.turn, this.invidencia)

        })

        this.socket.on('movimiento', (data) => {

            speechSynthesis.cancel()
            

            this.personaje.movimiento(data)
            this.finales.renderMensaje(data)

            setTimeout(() => { this.finales.removeMensaje() }, [4000])

            /**SPECIAL TABLE SQUARES */

            if (this.personaje.trampa === 2) {

                speechSynthesis.cancel()
                this.sonido.renderSound('Has caido en el laberinto, penalización de 2 casillas destruidas')
                this.trampa = true
                this.personaje.casilla = document.getElementById(`casilla-x-${this.personaje.numCasilla + 1}`)
                this.personaje.numCasilla++

                for (let i = 0; i < 2; i++) {
                    this.destroySquare()
                    
                }

                setTimeout(() => { this.personaje.movimientoEspacial() }, [4000])


            }

            if (this.personaje.trampa === 4) {

                speechSynthesis.cancel()
                this.sonido.renderSound('Has caido en la carcel, penalización de 4 casillas destruidas')

                this.trampa = true
                this.personaje.casilla = document.getElementById(`casilla-x-${this.personaje.numCasilla + 1}`)
                this.personaje.numCasilla++

                for (let i = 0; i < 4; i++) {
                    this.destroySquare()
                   
                }

                setTimeout(() => { this.personaje.movimientoEspacial() }, [4000])
            }

            if (this.personaje.trampa === 666) {

                speechSynthesis.cancel()
                this.sonido.renderSound('Has muerto colegui MUAjajajaj')

                this.finales.renderFinal(false)

                setTimeout(() => { this.reloadGame() }, [10000])
            }

            /**WIN & LOST METHODS */

                if (this.personaje.numCasilla < this.casillaDestruida) {/**LOST */

                speechSynthesis.cancel()

                this.sonido.renderSound('HAS     MUERTO')

                    this.finales.renderFinal(false)

                    setTimeout(() => { this.reloadGame() }, [10000])

                } else if (this.personaje.numCasilla >= 78) {/**WIN */

                speechSynthesis.cancel()

                this.sonido.renderSound('ganassste weeeey')

                    this.finales.renderFinal(true)

                    setTimeout(() => { this.reloadGame() }, [10000])
                }


        })

        this.socket.on('fellow-disconnected', (data) => {
            console.log('el compañero ha perdido la conexión')
            setTimeout(this.reloadGame, [3000])
        })


        this.socket.on('new-question', (data) => {
            this.turn = !this.turn
            this.trampa = false
            this.preguntaNueva = data.pregunta
            this.contadorErrores = 0;

            /**hacer una celebración imagen y sonido*/
            this.pregunta.divgeneral.innerHTML = ''
            this.pregunta.divgeneral.classList.remove('gobernadorabsoluto')
            setTimeout(() => { this.popUp() }, [4000])

        })

        this.socket.on('casilla-destruida', () => {

            if(!this.trampa){
                this.sonido.renderSound(`casilla numero ${this.casillaDestruida} destruida JAJAJAJ`)
            }
            

            this.casilla.destroyCasilla(this.casillaDestruida)
            this.contadorTurnos = 0
            this.casillaDestruida++
        })

    }


    /**METHODS */

    createRoom() {
        this.socket.emit('createRoom', { "name": sessionStorage.getItem('name'), "invidencia": sessionStorage.getItem('invidencia') })
    }

    searchRoom() {
        this.socket.emit('searchRoom', { "search": this.menu.search, "name": sessionStorage.getItem('name'), "invidencia": sessionStorage.getItem('invidencia') })
    }

    startGame() {
        this.socket.emit('inGame', { "room": sessionStorage.getItem('room') })
    }

    changeQuestion() {
        this.socket.emit('change-question', { "room": sessionStorage.getItem('room') })
    }


    destroySquare() {
        this.socket.emit('destroy-casilla', { "room": sessionStorage.getItem('room') })
    }

    reloadGame() {
        location.reload()
    }


    popUp() {
        this.pregunta.attributes(this.preguntaNueva)
        this.pregunta.render()
        this.pregunta.renderPista(this.preguntaNueva, this.turn, this.invidencia)
    }

    /**CONTROL COMMANDS */

    controlForm() {

        this.form.boton2.addEventListener("click", () => {

            sessionStorage.setItem('name', this.form.cajaTextNombres.value)

            this.form.father.innerHTML = ""

            this.form.formulario.classList.remove('formulario')

            this.connect()


        });

    }

    controlMenu() {

        this.menu.button1.addEventListener('click', () => {

            this.createRoom()

        })

        this.menu.button2.addEventListener('click', () => {

            this.searchRoom()

        })
    }


    controlRespuesta() {

        this.pregunta.contenedorBotones.addEventListener('click', (e) => {


            // console.log('funciono')
            if (e.target.nodeName === 'BUTTON') {

                this.contadorTurnos++

                if (this.contadorTurnos >= 2) {
                    this.destroySquare()
                }

                if (e.target.textContent === this.pregunta.respuestaCorrecta) {
                    this.contadorErrores = 0;
                    // this.turn = !this.turn
                    this.socket.emit('respuesta', { "response": true, "room": sessionStorage.getItem('room') })
                    this.changeQuestion()
                } else {

                    if (this.contadorErrores < 1) {
                        this.socket.emit('pista', { "room": sessionStorage.getItem('room') })
                        this.contadorErrores++

                    } else {
                        
                        this.socket.emit('respuesta', { "response": false, "room": sessionStorage.getItem('room') })
                        this.changeQuestion()
                    }

                }

            }
        })
    }
}


// 'Bienvenido, si sufres invidencia, presiona F, en caso contrario pulsa J,  seguidamente presiona enter'