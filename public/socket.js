class Socket {
    constructor(menu, form, waiting, board, casilla, personaje, pregunta, mensajes, sonido) {

        /**CLASES */
        this.form = form
        this.menu = menu
        this.waiting = waiting
        this.board = board
        this.casilla = casilla
        this.personaje = personaje
        this.pregunta = pregunta
        this.mensajes = mensajes

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
        this.contadorPregunta = 0
        this.longitudListaRandom = 0
        this.search = 0
        this.trampa = false
    }

    connect() {
        this.socket = io();

        this.socket.emit('comprobacion', { "name": sessionStorage.getItem('name') })

        this.invidencia = sessionStorage.getItem('invidencia') === 'true' ? true : false
        this.turn = this.invidencia

        this.escuchas();
    }


    /**SOCKETS LISTENERS */
    escuchas() {

        /**--------------------------------------- */

        this.socket.on('denegado', (dato) => {

            this.mensajes.renderError(dato.message)
            document.getElementById("textbox").value = ""
            setTimeout(() => { this.mensajes.removeMensaje() }, [5000])
        })

        /**--------------------------------------- */

        this.socket.on('confirmacion', (dato) => {
            console.log(dato)
            this.form.father.innerHTML = ""

            this.form.formulario.classList.remove('formulario')
            this.menu.CallMenu()
        })

        /**--------------------------------------- */


        this.socket.on('createdRoom', (dato) => {
            sessionStorage.setItem('room', dato.room)
            this.waiting.Call()

        })

        /**--------------------------------------- */

        this.socket.on('foundRoom', (dato) => {

            sessionStorage.setItem('room', dato.room)

            const container = document.getElementById('container-father')
            container.innerHTML = ''

            /**RENDER GAME */
            // console.log(dato.listaRandom)
            speechSynthesis.cancel()
            this.board.RenderBoard()
            this.casilla.MethodSwitch(dato.listaRandom)
            this.personaje.Call()
            this.personaje.movimiento(true)

            this.sonido.sonidoInicioP()
            /**SEND SOCKET MESSAGE TO START */
            if (this.turn) {
                this.startGame()
            }

        })

        /**--------------------------------------- */

        this.socket.on('send-pregunta', (data) => {

            this.preguntaNueva = data.pregunta

            this.contadorPregunta++

            sessionStorage.setItem('listaRandomPreguntas', data.lista)

            this.longitudListaRandom = data.lista.length

            setTimeout(() => { this.popUp() }, [4000])

        })

        /**--------------------------------------- */

        this.socket.on('change-pista', () => {

            speechSynthesis.cancel()
            this.turn = !this.turn


            if (this.turn) {
                this.contadorErrores++
            }

            this.pregunta.renderPista(this.preguntaNueva, this.turn, this.invidencia)

        })

        /**--------------------------------------- */

        this.socket.on('movimiento', (data) => {

            

            speechSynthesis.cancel()

            this.mensajes.renderMensaje(data, this.personaje.valorCasilla)

            this.personaje.movimiento(data)

            /**WIN & LOST METHODS */

            if (this.personaje.numCasilla < this.casillaDestruida) {/**LOST */

                speechSynthesis.cancel()
                this.sonido.sonidoGameover()
                this.sonido.renderSound('HAS     MUERTO')

                this.mensajes.renderFinal(false)

                setTimeout(() => { this.reloadGame() }, [10000])

            } else if (this.personaje.numCasilla >= 78) {/**WIN */

                this.win() 
            }

            if(data){
                this.sonido.sonidoCorrecto()
            }else{
                this.sonido.sonidoIncorrecto()
            }
            

            setTimeout(() => { this.mensajes.removeMensaje() }, [4000])

            /**SPECIAL TABLE SQUARES */

            if (this.personaje.trampa === 2) {

                this.sonido.sonidoLaberinto()
                speechSynthesis.cancel()
                this.sonido.renderSound('Has caido en el laberinto, penalización de 2 casillas destruidas')
                this.trampa = true
                this.personaje.casilla = document.getElementById(`casilla-x-${this.personaje.numCasilla + 1}`)
                this.personaje.numCasilla++

                if(this.turn){
                    for (let i = 0; i < 2; i++) {
                        this.destroySquare()
    
                    }
                }

                setTimeout(() => { this.personaje.movimientoEspacial() }, [4000])


            }

            if (this.personaje.trampa === 4) {

                this.sonido.sonidoCarcel()
                speechSynthesis.cancel()
                this.sonido.renderSound('Has caido en la carcel, penalización de 4 casillas destruidas')

                this.trampa = true
                this.personaje.casilla = document.getElementById(`casilla-x-${this.personaje.numCasilla + 1}`)
                this.personaje.numCasilla++

                if(this.turn){
                    for (let i = 0; i < 4; i++) {
                        this.destroySquare()
    
                    }
                }
                

                setTimeout(() => { this.personaje.movimientoEspacial() }, [4000])
            }

            if (this.personaje.trampa === 666) {

                this.sonido.sonidoMuerte()
                speechSynthesis.cancel()
                this.sonido.renderSound('Has muerto colegui MUAjajajaj')

                this.mensajes.renderFinal(false)

                setTimeout(() => { this.reloadGame() }, [10000])
            }

            
        /**--------------------------------------- */
        })

        this.socket.on('fellow-disconnected', (data) => {
            console.log('el compañero ha perdido la conexión')
            setTimeout(this.reloadGame, [3000])
        })


        /**--------------------------------------- */

        this.socket.on('new-question', (data) => {

            this.contadorTurnos++

            this.contadorPregunta++


            if (this.contadorPregunta === this.longitudListaRandom) {
                this.contadorPregunta = 0
            }

            this.turn = !this.turn
            this.trampa = false
            this.preguntaNueva = data.pregunta
            this.contadorErrores = 0;

            /**hacer una celebración imagen y sonido*/
            this.pregunta.divgeneral.innerHTML = ''
            this.pregunta.divgeneral.classList.remove('gobernadorabsoluto')
            setTimeout(() => { this.popUp() }, [4000])

        })

        /**--------------------------------------- */
        this.socket.on('casilla-destruida', () => {

            console.log(`casilla destruida = ${this.casillaDestruida}`)
            console.log(`casilla actual = ${this.personaje.numCasilla}`)

            this.sonido.sonidoCasilla()
            this.casilla.destroyCasilla(this.casillaDestruida)
            this.contadorTurnos = 0
            

            // document.getElementById(`numero-${this.casillaDestruida}`).classList.add('destroy-casilla')
            console.log(this.personaje.numCasilla)

            if (this.casillaDestruida >= this.personaje.numCasilla) {
                speechSynthesis.cancel()
                this.sonido.sonidoGameover()
                this.sonido.renderSound('HAS     MUERTO jujujajajajajaja ja ja ja a a o')
                this.mensajes.renderFinal(false)
                setTimeout(() => { this.reloadGame() }, [10000])
            }

            this.casillaDestruida++
        })

        this.socket.on('winners',()=>{
            speechSynthesis.cancel()
                this.sonido.sonidoWin()
                this.sonido.renderSound('ganassste weeeey')

                this.mensajes.renderFinal(true)

                setTimeout(() => { this.reloadGame() }, [10000])
        })

    }


    /**METHODS */

    createRoom() {
        this.socket.emit('createRoom', { "name": sessionStorage.getItem('name'), "invidencia": sessionStorage.getItem('invidencia'), "state": this.menu.state })
    }

    searchRoom() {
        this.socket.emit('searchRoom', { "search": this.search, "name": sessionStorage.getItem('name'), "invidencia": sessionStorage.getItem('invidencia') })
    }

    startGame() {
        this.socket.emit('inGame', { "room": sessionStorage.getItem('room') })
    }

    changeQuestion() {
        this.socket.emit('change-question', { "room": sessionStorage.getItem('room'), "listRandom": sessionStorage.getItem('listaRandomPreguntas'), "numPregunta": this.contadorPregunta })
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
        this.pregunta.renderPista(this.preguntaNueva, this.turn, this.invidencia, this.personaje.numCasilla)
    }

    win(){
        this.socket.emit('win',{"room":sessionStorage.getItem('room')})
    }

    /**CONTROL COMMANDS */

    controlForm() {

        this.form.boton2.addEventListener("click", () => {

            sessionStorage.setItem('name', this.form.cajaTextNombres.value)
            // sessionStorage.setItem('invidencia',this.)


            this.connect()

        });

    }

    controlMenu() {


        this.menu.button3.addEventListener('click', () => {
            this.search = "random"
            this.searchRoom()

        })
        this.menu.button4.addEventListener('click', () => {
            this.search = this.menu.TextBox.value
            this.searchRoom()

        })
        this.menu.button5.addEventListener('click', () => {
            this.menu.state = 'public'
            this.createRoom()

        })
        this.menu.button6.addEventListener('click', () => {
            this.menu.state = 'private'
            this.createRoom()

        })

        this.waiting.botonCancelar.addEventListener('click', () => {

            this.reloadGame()
        })
    }


    controlRespuesta() {

        this.pregunta.contenedorBotones.addEventListener('click', (e) => {

            if (e.target.nodeName === 'BUTTON') {


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
                if (this.contadorTurnos >= 2) {
                    this.destroySquare()
                }

            }
        })
    }
}


// 'Bienvenido, si sufres invidencia, presiona F, en caso contrario pulsa J,  seguidamente presiona enter'