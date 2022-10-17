const Preguntas= require('../models/preguntas')
const route= require('../routes/admin.routes')
const cloudinary= require('../config/cloudinary')
admincontroller={}

admincontroller.setPreguntas= async(req,res)=>{
    console.log("admincont.setpreguntas")
    // var p= (req.body.p)
    // console.log(p)
    console.log(req.files)
    // console.log(req.body)
    var img=await cloudinary.v2.uploader.upload(req.files.pistaI.tempFilePath)
    console.log(img.url)
    var nuevaPregunta = new Preguntas({
       
            pregunta:req.body.pregunta,
            respuesta:req.body.respuesta,
            respuestaI:[req.body.respuestaI1,req.body.respuestaI2],
            pistaA:req.body.pistaA,
            pistaI:img.url,

   });
   console.log(nuevaPregunta);
  
await nuevaPregunta.save(OnSaved); 

   nuevaPregunta.save(OnSaved);
   function OnSaved(err){
       if(err){
           console.log(err)
       }else{
           console.log("pregunta guardada")
       }
   }
}


admincontroller.renderAdmin = (req,res)=>{
    res.sendFile(__dirname.split('controllers')[0] + "public/admin.html")


    console.log(__dirname.split('controllers'))
}

module.exports = admincontroller 