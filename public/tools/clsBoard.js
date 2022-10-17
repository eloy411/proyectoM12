class clsBoard {
    constructor(pnumrows,pnumcasilla){
        this.tablero = document.getElementById('container-father') //
        this.i = 0
        this.numrows = pnumrows
        this.numcasilla = pnumcasilla

        /**NUESTRO GAME OVER */
        
    }
    RenderBoard(){
        while (this.i < this.numrows) {
            var row = document.createElement("div")
            row.classList.add("row")
            row.id = `row-${this.i}`
            //console.log(row)
            this.tablero.appendChild(row)
            var row = document.getElementById(`row-${this.i}`)
            var j = 0
            while (j < this.numcasilla) {
                var row = document.getElementById(`row-${this.i}`)
                var casilla = document.createElement("div")
                casilla.classList.add("casilla")
                casilla.id = `casilla-${this.i}.${j}`
                //console.log(casilla)
                row.appendChild(casilla)
                j++
        
            }
            this.i++
        }

        
    }

}