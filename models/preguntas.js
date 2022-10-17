const {Schema,model}=require('mongoose')

// tema,string, respuesta correcta, respuestas incorrectas,pistas audio,pista img
const preguntasSchema= new Schema({
// tema:{type:String},
pregunta:{type:String},
respuesta:{type:String},
respuestaI:{type:Array},
pistaA:{type:String},
pistaI:{type:Array},
})


module.exports =model('Preguntas',preguntasSchema)