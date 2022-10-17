const Preguntas = require('./models/preguntas')

Socket = {}

Socket.connection = (io) => {

   const rooms = []


   io.on('connection', (socket) => {

      console.log(socket.id)

      socket.emit('confirmacion', 'conectado')

      /**CREAR LA ROOM */
      socket.on('createRoom', (data) => {

         const nameRoom = data.name;

         rooms.push([nameRoom, [socket.id, data.invidencia]])


         socket.join(nameRoom)

         console.log(rooms)

         io.to(nameRoom).emit('createdRoom', { "room": nameRoom, "message": `${data.name} conectado en el room ${nameRoom}` })

      })

      /**BUSCAR LA ROOM */
      socket.on('searchRoom', (data) => {


         if (data.search === 'random') {

            var coincidencia = false

            const listaRandom = []

            for (let i = 0; i < 63; i++) {

               var num = Math.floor(Math.random() * 4) + 1
               listaRandom.push(num)
               // console.log(num)
            }


            for (let i = 0; i < rooms.length; i++) {

               if (rooms[i].length === 2 && rooms[i][1][1] !== data.invidencia) {

                  socket.join(rooms[i][0])
                  rooms[i].push([socket.id, data.invidencia])
                  console.log(rooms[i])
                  // console.log(listaRandom)
                  io.to(rooms[i][0]).emit('foundRoom', { "room": rooms[i][0], "message": `${data.name} conectado en el room ${rooms[i][0]}`, "listaRandom": listaRandom })
                  i = rooms.length
                  coincidencia = true

               }
            }

            if (!coincidencia) {
               console.log('no hay coincidencia')
            }

         } else {/**BUSCAR A ALGUIEN ESPECÍFICAMENTE */

            for (let i = 0; i < rooms.length; i++) {
               if (rooms[i].length === 2 && rooms[i][0] === data.search) {
                  rooms[i].push([socket.id, data.invidencia])
                  socket.join(rooms[i][0])
                  io.to(rooms[i][0]).emit('foundRoom', { "room": rooms[i][0], "message": `${data.name} conectado en el room ${rooms[i][0]}` })
                  i = rooms.length
               }
            }

         }

      })

      /**INICIAR JUEGO */

      socket.on('inGame', async (data) => {

         const response = await Preguntas.find()

         
         function randomIndex(){
            let i = Math.round(Math.random() * (response.length))
            return i
         }
         
         
         var indice = response.length

         while(indice === response.length){
             indice = randomIndex()
         }
         
         // if (i != 0) { i + 1 }

         dato = {
            "pregunta": response[indice],
            "id": indice
         }
         
         io.to(data.room).emit('send-pregunta', dato)
      })

      /**CHANGE PISTA */

      socket.on('pista', (data) => {
         console.log(data.room)
         io.to(data.room).emit('change-pista')
      })


      /**CHANGE QUESTION */

      socket.on('change-question', async (data) => {

         const response = await Preguntas.find()

         function randomIndex(){

            let i = Math.round(Math.random() * (response.length))
            return i
         }
         
         
         var indice = response.length

         while(indice === response.length){
             indice = randomIndex()
         }
         
         dato = {
            "pregunta": response[indice],
            "id": indice
         }
         console.log(dato.pregunta)
         io.to(data.room).emit('new-question',dato)
      })



      /**RESPUESTA */
      socket.on('respuesta', (data) => {
         console.log(data.response)
         console.log(data.room)
         io.to(data.room).emit('movimiento', data.response)
      })


      /**DESTRUIR CASILLA */

      socket.on('destroy-casilla', (data) => {
         io.to(data.room).emit('casilla-destruida')
      })

      /**DESCONEXIÓN */
      socket.on("disconnect", () => {
         console.log(`${socket.id} se ha desconectado`)
         for (let i = 0; i < rooms.length; i++) {

            if (rooms[i].length === 3 && (rooms[i][1][0] === socket.id || rooms[i][2][0] === socket.id)) {
               if (rooms[i][1][0] === socket.id) {
                  io.to(rooms[i][2][0]).emit('fellow-disconnected', { message: 'tu compañero se ha desconectado' })
               } else {
                  io.to(rooms[i][1][0]).emit('fellow-disconnected', { message: 'tu compañero se ha desconectado' })
               }
               rooms.splice(i, 1)
            } else if (rooms[i].length === 2 && (rooms[i][1][0] === socket.id)) {
               rooms.splice(i, 1)
            }
            console.log(rooms)
         }
      });
   })


}


module.exports = Socket 