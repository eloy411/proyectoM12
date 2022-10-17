const express=require('express')
const router=express.Router()

const {setPreguntas,renderAdmin} = require('../controllers/admin.controller')



router.get('/admin',renderAdmin)
router.post('/admin/add-preguntas',setPreguntas)

console.log("route admin")
module.exports = router