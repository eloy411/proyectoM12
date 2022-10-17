
const body = {}

const pregunta = document.getElementById('pregunta')
const respuesta = document.getElementById('respuesta')
const respuestaI1 = document.getElementById('respuesta-incorrecta1')
const respuestaI2 = document.getElementById('respuesta-incorrecta2')
const pistaA = document.getElementById('pista-audio')
const pistaI = document.getElementById('pista-imagen')
const enviar = document.getElementById('enviar')


enviar.addEventListener('click',async ()=>{

    const formData = new FormData()
    formData.append('pregunta',pregunta.value)
    formData.append('respuesta',respuesta.value)
    formData.append('respuestaI1',respuestaI1.value)
    formData.append('respuestaI2',respuestaI2.value)
    formData.append('pistaA',pistaA.value)
    formData.append('pistaI',pistaI.files[0])


    // console.log(body.pistaI)



    options = {
        method: 'post',
        body: formData ,//cambair stringfy
        headers : {'Accept': 'multipart/form-data'},
    }
    console.log
    await fetch('http://localhost:8000/admin/add-preguntas',options)
})