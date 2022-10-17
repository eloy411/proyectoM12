class Preguntas {

    constructor() {


        /**NUESTRO */
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

        this.respuestaI1.setAttribute('class', 'botonO')
        this.respuestaI1.innerText = pregunta.respuestaI[0];

        this.respuestaI2.setAttribute('class', 'botonO')
        this.respuestaI2.innerText = pregunta.respuestaI[1];


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


        this.contenedorBotones.appendChild(this.resCorrecta)
        this.contenedorBotones.appendChild(this.respuestaI1)
        this.contenedorBotones.appendChild(this.respuestaI2)

        document.getElementById('body').appendChild(this.divgeneral)



    }

    renderPista(pregunta, turn, invidencia) {
        console.log(pregunta.pistaI)
        if (turn) {
            this.contenedorBotones.innerHTML = ''
            this.contenedorBotones.appendChild(this.resCorrecta)
            this.contenedorBotones.appendChild(this.respuestaI1)
            this.contenedorBotones.appendChild(this.respuestaI2)

            if (invidencia) {
                this.imagenPregunta.setAttribute('src', 'https://thumbs.dreamstime.com/z/ondas-ac%C3%BAsticas-del-o%C3%ADdo-40358790.jpg');
                console.log(pregunta.pistaA)
            } else {
                this.imagenPregunta.setAttribute('src', pregunta.pistaI);
            }
        } else {
            this.contenedorBotones.innerHTML = '<h1>Esperando que el compañero responda</h1>'
            this.imagenPregunta.setAttribute('src', 'https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-temporizador-cronometro_138676-2420.jpg?w=2000');
            console.log('esperando que el compañero responda')
        }
    }
}