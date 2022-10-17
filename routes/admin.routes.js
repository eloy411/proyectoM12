const express=require('express')
const Preguntas= require('../models/preguntas')
const router=express.Router()

const {setPreguntas,renderAdmin} = require('../controllers/admin.controller')



router.get('/admin',renderAdmin)
router.post('/admin/add-preguntas',setPreguntas)

router.get('/admin/get',async (req,res)=>{

    const preguntas = await Preguntas.find()

    res.send(preguntas)

})

console.log("route admin")
module.exports = router