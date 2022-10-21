class clsCasilla {
    constructor(pnumrows, pnumcasilla , sonido) {
        this.x = 0
        this.i = 0
        this.j = 0
        this.randomCount = 0
        this.numrows = pnumrows
        this.numcasilla = pnumcasilla
        this.randomList = []
        this.sonido = sonido

    }
    PaintMethod() {
        var casilla = document.getElementById(`casilla-${this.i}.${this.j}`)
        // console.log(casilla)
        casilla.style.backgroundColor = '#47dff0';
        casilla.style.border = '2px solid black';
        casilla.id = `casilla-x-${this.x}`;

        if (this.x == 75) {
            this.InsertImageMethod('img/risk-skull.png');
            casilla.style.backgroundColor = 'white';
            casilla.style.border = '2px solid black';
        }
        else if (this.x == 9) {
            this.InsertImageMethod('img/maze.png');
            casilla.style.backgroundColor = 'white';
            casilla.style.border = '2px solid black';
        }
        else if (this.x == 25) {
            this.InsertImageMethod('img/carcel.png');
            casilla.style.backgroundColor = 'white';
            casilla.style.border = '2px solid black';
        }
        else if (this.x == 37) {
            this.InsertImageMethod('img/maze2.png');
            casilla.style.backgroundColor = 'white';
            casilla.style.border = '2px solid black';
        }
        else if (this.x == 52) {
            this.InsertImageMethod('img/esposas.png');
            casilla.style.backgroundColor = 'white';
            casilla.style.border = '2px solid black';
        }

        else if (this.x < 72 && this.x > 4) {
            
            var contenidocas = document.createElement("h1")
            contenidocas.setAttribute("class", "valormov")
            var numerodecasilla = document.createElement("h1")
            numerodecasilla.setAttribute("class","numerox")
            numerodecasilla.id = `numero-${this.x}`
            contenidocas.textContent = this.randomList[this.randomCount]
            numerodecasilla.textContent = this.x
            this.randomCount++
            casilla.appendChild(contenidocas)
            casilla.appendChild(numerodecasilla)
            // this.SpecialCasillas(casilla);
        } else if (this.x >= 0 && this.x <= 4) {
            var contenidocas = document.createElement("h1")
            contenidocas.setAttribute("class", "valormov")
            var numerodecasilla = document.createElement("h1")
            numerodecasilla.setAttribute("class","numerox")
            numerodecasilla.id = `numero-${this.x}`
            contenidocas.textContent = 1
            numerodecasilla.textContent = this.x
            casilla.appendChild(contenidocas)
            casilla.appendChild(numerodecasilla)
        }
        else if (this.x == 74) {
            var contenidocas = document.createElement("h1")
            contenidocas.setAttribute("class", "valormov")
            var numerodecasilla = document.createElement("h1")
            numerodecasilla.setAttribute("class","numerox")
            numerodecasilla.id = `numero-${this.x}`
            contenidocas.textContent = 2
            numerodecasilla.textContent = this.x
            casilla.appendChild(contenidocas)
            casilla.appendChild(numerodecasilla)
        }
        else if (this.x > 71 && this.x < 74 || this.x > 75) {
            var contenidocas = document.createElement("h1")
            contenidocas.setAttribute("class", "valormov")
            var numerodecasilla = document.createElement("h1")
            numerodecasilla.setAttribute("class","numerox")
            numerodecasilla.id = `numero-${this.x}`
            numerodecasilla.textContent = this.x
            contenidocas.textContent = 1
            casilla.appendChild(contenidocas)
            casilla.appendChild(numerodecasilla)
        }


    }

    InsertImageMethod(pimagen) {
        var casilla = document.getElementById(`casilla-x-${this.x}`)
        let imagen = document.createElement('img')
        imagen.src = pimagen
        imagen.classList.add(`imagenestablero`)
        casilla.appendChild(imagen)
    }




    MethodSwitch(listaRandom) {

        this.randomList = listaRandom

        console.log(this.randomList)
        this.x = 0
        var vuelta = 0
        while (vuelta < 12) {
            switch (vuelta) {
                case 0:
                    this.j = 0
                    this.i = 11
                    while (this.j < 12) {
                        this.PaintMethod()
                        this.x++
                        this.j++
                    }
                    break;
                case 1:
                    this.j = this.numcasilla - 1
                    this.i = this.numrows - 2

                    while (this.i >= 0) {
                        this.PaintMethod()
                        this.x++
                        this.i--

                    }
                    break;

                case 2:
                    this.j = this.numcasilla - 2
                    this.i = 0
                    while (this.j > 1) {
                        this.PaintMethod()
                        this.x++
                        this.j--
                    }
                    break;
                case 3:
                    this.j = this.numcasilla - 11
                    this.i = this.numrows - 12
                    while (this.i < this.numrows - 3) {
                        this.PaintMethod()
                        this.x++
                        this.i++
                    }
                    break;
                case 4:
                    this.i = this.numrows - 3
                    this.j = this.numcasilla - 11
                    while (this.j < this.numcasilla - 2) {
                        this.PaintMethod()
                        this.x++
                        this.j++
                    }
                    break;
                case 5:
                    this.i = this.numrows - 4
                    this.j = this.numcasilla - 3
                    while (this.i > 1) {
                        this.PaintMethod()
                        this.x++
                        this.i--
                    }
                    break;
                case 6:
                    this.i = this.numrows - 10
                    this.j = this.numcasilla - 4
                    while (this.j > 2) {
                        this.PaintMethod()
                        this.x++
                        this.j--
                    }
                    break;
                case 7:
                    this.i = this.numrows - 9
                    this.j = this.numcasilla - 9
                    while (this.i < 8) {
                        this.PaintMethod()
                        this.x++
                        this.i++
                    }
                    break;
                case 8:
                    this.i = this.numrows - 5
                    this.j = this.numcasilla - 8
                    while (this.j < this.numcasilla - 4) {
                        this.PaintMethod()
                        this.x++
                        console.log(this.x)
                        this.j++
                    }
                    break;
                case 9:
                    this.i = this.numrows - 6
                    this.j = this.numcasilla - 5
                    while (this.i > this.numrows - 9) {
                        this.PaintMethod()
                        this.x++
                        this.i--
                    }
                    break;
                case 10:
                    this.i = this.numrows - 8
                    this.j = this.numcasilla - 6
                    while (this.j > this.numcasilla - 8) {
                        this.PaintMethod()
                        this.x++
                        this.j--
                    }
                    break;

                case 11:
                    this.i = this.numrows - 7
                    this.j = this.numcasilla - 7
                    while (this.j > this.numcasilla - 8) {
                        this.PaintMethod()
                        this.x++
                        this.j--
                    }
            }
            vuelta++
            //console.log(this.vuelta)
        }
    }


    destroyCasilla(num) {

        let casilla = document.getElementById(`casilla-x-${num}`)
        let numerodecasilla = document.getElementById(`numero-${num}`)
        casilla.classList.add('destroy-casilla')
        numerodecasilla.classList.add('destroy-num')

    }

}