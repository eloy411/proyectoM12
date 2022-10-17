const socketIo = require('socket.io')
const http = require('http')
const express= require('express');
const fileUpload= require('express-fileupload')
const path = require('path');
const cors = require('cors')
const {connection} = require('./socket.js')
require('./config/database');


/**CONFIG SOCKET */
const app = express()
app.set('port',process.env.PORT || 3001)
const server = http.createServer(app)
const io = socketIo(server)

/**CONFIG */
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./uploads'
}))

app.get('/preguntas',(req,res)=>{
res.send({"message":"Hola"})
})

console.log(path.join(__dirname,'public'))
/**ROUTES */

// app.use()
app.use(require('./routes/admin.routes'))



connection(io)



server.listen(app.get('port'), () =>{ 
    console.log(``)  
})