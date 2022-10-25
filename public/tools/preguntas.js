class Preguntas {

    constructor(sonido) {


        /**NUESTRO */
        this.sonido1 = new Sound()
        this.sonido2 = new Sound()
        this.sonido3 = new Sound()
        this.sonido4 = new Sound()
        this.sonido5 = new Sound()
        this.sonido6 = new Sound()
        this.sonido7 = new Sound()
        this.sonido8 = new Sound()
        this.sonido9 = new Sound()
        this.sonido10 = new Sound()
        this.sonido11 = new Sound()
        this.numPregunta = 0
        this.respuestaCorrecta = ''

        /**OSCAR */
        this.divgeneral = document.createElement('div')
        this.botonver = document.createElement('button')
        this.modal = document.createElement('div')
        this.modalcontent = document.createElement('div')
        this.Titulopregunta = document.createElement('h2')
        this.pregunta = document.createElement('div')
        this.textoPregunta = document.createElement('p')
        this.imagen = document.createElement('div')
        this.contenedorImg = document.createElement('div')
        this.imagenPregunta = document.createElement('img')
        this.contenedorBotones = document.createElement('div')
        this.resCorrecta = document.createElement('button')
        this.respuestaI1 = document.createElement('button')
        this.respuestaI2 = document.createElement('button')



    }

    /**OSCAR */


    attributes(pregunta) {



        this.respuestaCorrecta = pregunta.respuesta

        this.divgeneral.setAttribute('id', 'divGeneral');
        this.divgeneral.setAttribute('class', 'gobernadorabsoluto');
        this.divgeneral.style.position = 'absolute'



        this.modal.setAttribute('id', 'modal')
        this.modal.setAttribute('class', 'modal-container')

        this.modalcontent.setAttribute('class', 'modal-content')

        this.Titulopregunta.innerHTML = `PREGUNTA ${this.numPregunta++}:`;

        this.pregunta.setAttribute('class', 'text');

        this.textoPregunta.innerHTML = pregunta.pregunta;

        this.imagen.setAttribute('class', 'imagen-pregunta');

        this.contenedorImg.setAttribute('class', 'imagenPregunta');



        this.contenedorBotones.setAttribute('class', 'botones-respuesta')

        this.resCorrecta.setAttribute('class', 'botonO')
        this.resCorrecta.innerText = this.respuestaCorrecta;
        // this.resCorrecta.addEventListener('keydown',this.keyDown)

        this.respuestaI1.setAttribute('class', 'botonO')
        this.respuestaI1.innerText = pregunta.respuestaI[0];
        // this.respuestaI1.addEventListener('keydown',this.keyDown)

        this.respuestaI2.setAttribute('class', 'botonO')
        this.respuestaI2.innerText = pregunta.respuestaI[1];
        // this.respuestaI2.addEventListener('keydown',this.keyDown)



    }


    /**NUESTRO */

    render() {


        this.divgeneral.appendChild(this.modal)
        this.modal.appendChild(this.modalcontent)
        this.modalcontent.appendChild(this.Titulopregunta)
        this.modal.appendChild(this.pregunta)
        this.pregunta.appendChild(this.textoPregunta)
        this.modal.appendChild(this.imagen)

        this.imagen.appendChild(this.contenedorImg)

        this.contenedorImg.appendChild(this.imagenPregunta)
        this.modal.appendChild(this.contenedorBotones)

        this.respuestasArray = [this.resCorrecta, this.respuestaI1, this.respuestaI2]
        this.respuestasRandom = []
        while (this.respuestasRandom.length < 3) {

            let index = Math.round(Math.random() * 3)

            if (!this.respuestasRandom.includes(index) && index != 3) {
                this.respuestasRandom.push(index)
            }
        }

        console.log(this.respuestasArray)
        console.log(this.respuestasRandom)

        this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[0]])
        this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[1]])
        this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[2]])

        document.getElementById('body').append(this.divgeneral)



    }

    renderPista(pregunta, turn, invidencia, numCasilla, error) {
        console.log(error)

        if (turn) {
            this.contenedorBotones.innerHTML = ''

            this.respuestasArray = [this.resCorrecta, this.respuestaI1, this.respuestaI2]
            this.respuestasRandom = []
            while (this.respuestasRandom.length < 3) {

                let index = Math.round((Math.random() * 3))

                if (!this.respuestasRandom.includes(index) && index != 3) {
                    this.respuestasRandom.push(index)
                }
            }
            // console.log(this.respuestasRandom)

            this.respuestasArray[this.respuestasRandom[0]].id = 'res1'
            this.respuestasArray[this.respuestasRandom[1]].id = 'res2'
            this.respuestasArray[this.respuestasRandom[2]].id = 'res3'
            this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[0]])
            this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[1]])
            this.contenedorBotones.append(this.respuestasArray[this.respuestasRandom[2]])

            if (invidencia) {
                
                if (error == 0) {
                    speechSynthesis.cancel()
                    this.sonido1.renderSound(`bien, estas en la casilla numero ${numCasilla},
                la pregunta es...${pregunta.pregunta}`)
                } else {
                    speechSynthesis.cancel()
                    this.sonido11.renderSound(`tu compañero se ha equivocado, salvanos!, la pregunta es...${pregunta.pregunta}`)
                }

                // this.sonido.renderSound('   ')
                this.sonido2.renderSound('Respuesta 1')
                this.sonido3.renderSound(this.respuestasArray[this.respuestasRandom[0]].textContent)
                this.sonido4.renderSound('Respuesta 2')
                this.sonido5.renderSound(this.respuestasArray[this.respuestasRandom[1]].textContent)
                this.sonido6.renderSound('Respuesta 3')
                this.sonido7.renderSound(`${this.respuestasArray[this.respuestasRandom[2]].textContent}, , para responder pulse el numero de la respuesta en su teclado.`)

                this.sonido8.renderSound('Pista   ')
                this.sonido9.renderSound(pregunta.pistaA)

                this.imagenPregunta.setAttribute('src', 'https://thumbs.dreamstime.com/z/ondas-ac%C3%BAsticas-del-o%C3%ADdo-40358790.jpg');

            } else {
                this.imagenPregunta.setAttribute('src', pregunta.pistaI);
            }
        } else {
            this.contenedorBotones.innerHTML = '<h1>Esperando que el compañero responda</h1>'
            this.imagenPregunta.setAttribute('src', 'https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-temporizador-cronometro_138676-2420.jpg?w=2000');
            
            if (invidencia && error == 1) {
                speechSynthesis.cancel()
                this.sonido10.renderSound('oh!, te has equivocado, le toca a tu compañero')
            }else if(invidencia && error == 0){
                speechSynthesis.cancel()
                this.sonido10.renderSound('Esperando que el compañero responda')
            }
        }

        document.addEventListener('keydown', this.keyDown)
    }


    keyDown(e) {
        if (e.key == '1') {
            document.getElementById('res1').click()
        }
        if (e.key == '2') {
            document.getElementById('res2').click()
        }
        if (e.key == '3') {
            document.getElementById('res3').click()
        }
    }

}