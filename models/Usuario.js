const {Schema,model}=require('mongoose')

// nombre,id sesion, invidente o no
const usuariosSchema= new Schema({
nombre:{type:String},
id_sesion:{type:String},
invidente:{type:Boolean},

})


module.exports =model('Usuarios',usuariosSchema)