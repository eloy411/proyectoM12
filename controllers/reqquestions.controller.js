const Preguntas=require('../models/preguntas')

QuestionsController={}

QuestionsController.getQuestions=async(req,res)=>{
    const data=await Preguntas.find();
    console.log(data)
}

module.exports=QuestionsController