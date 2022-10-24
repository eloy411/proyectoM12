class formulario {
    constructor(sonido) {
        
        this.sonido = sonido
        this.invidente = false;
        this.nombre = '';
        ////Crear el objeto formulario
        this.formulario = document.createElement("div");

        ////Crear el objeto label de titulo
        this.titulo = document.createElement("label");

        ////Crear el objeto caja de texto Nombres
        this.cajaTextNombres = document.createElement("input");
        ///Crear el objeto pregunta
        this.pregunta=document.createElement("h1")
        ////Crea el bjeto TextoSi

        ///GRUPO PARA OPTIONS
        this.grupoP = document.createElement("div")

        this.TextSi= document.createElement("label")

        ////Crear el objeto opcionSi
        this.opcionSi= document.createElement("input")
        
        ////Crea el bjeto TextoNo
        this.TextNo= document.createElement("label")
        
        ////Crear el objeto opcionNo
        this.opcionNo= document.createElement("input")
        
        ////Crear el objeto boton
        this.boton = document.createElement("input");	

        this.boton2= document.createElement("input");

        this.pregunta2= document.createElement("h1")
    }

    call(){
        this.SetAtributeElements();
        this.RenderQuestion();
        this.ExtraFunction();

        this.sonido.renderSound('Bienvenido, si sufres invidencia, presiona F, en caso contrario pulsa J,  seguidamente presiona enter')
    }


    SetAtributeElements(){
        ////Asignar atributos al objeto formulario
        // this.formulario.setAttribute('method', "post");
        this.formulario.setAttribute('class','formulario');
        this.formulario.setAttribute('id','formulario');
        // this.formulario.setAttribute('action', "");

        
        

        ////Asignar atributos al objeto formulario
        this.titulo.setAttribute('class','titulo');
        this.titulo.innerHTML = '<h1>Login</h1>';//Asignar el texto de titulo en el objeto titulo

        ////Asignar atributos al objeto caja de texto de Nombres
        this.cajaTextNombres.setAttribute('type', "text");
        this.cajaTextNombres.setAttribute('placeholder', "Nombre");
        this.cajaTextNombres.setAttribute('class','textbox');
        this.cajaTextNombres.setAttribute('id','textbox');
        
        
        ///Asigna atributos al objeto pregunta
        this.pregunta.setAttribute('class','pregunta');
        this.pregunta.innerHTML="¿Tienes caracterísitcas visuales especiales?";

        /// DIV PARA AGRUPAR BOTONES
        this.grupoP.setAttribute('class','grupoPr')
        
        this.pregunta2.setAttribute('class','pregunta2');
        this.pregunta2.innerHTML="¿Cual es tu nombre?";
        
        ///Asigna atributos al objeto TextoSi
        this.TextSi.setAttribute('for','html');
        this.TextSi.innerHTML="SI"
        this.TextSi.setAttribute('class','textsi');
        

        ////Asignar atributos al objeto opcionSi
        this.opcionSi.setAttribute('type','radio');
        this.opcionSi.setAttribute('class','optionsi');
        this.opcionSi.setAttribute('id','optionsi');
        this.opcionSi.setAttribute('name','option');
        this.opcionSi.setAttribute('value','si');
        
        ///Asigna atributos al objeto TextoNo
        this.TextNo.setAttribute('for','html');
        this.TextNo.innerHTML="NO"
        this.TextNo.setAttribute('class','textno');
       

        ////Asignar atributos al objeto opcionNO
        this.opcionNo.setAttribute('type','radio');
        this.opcionNo.setAttribute('class','optionno');
        this.opcionNo.setAttribute('id','optionno');
        this.opcionNo.setAttribute('name','option');
        this.opcionNo.setAttribute('value','no');
        

        ////Asignar atributos al objeto boton
        this.boton.setAttribute('type', "button");
        this.boton.setAttribute('value', "Siguiente");
        this.boton.setAttribute('class','boton');
        this.boton.setAttribute('id','boton');

        this.boton2.setAttribute('type', "button");
        this.boton2.setAttribute('value', "Enviar");
        this.boton2.setAttribute('class','boton2');
        this.boton2.setAttribute('id','boton2');

       
        
        
        
         		
    }
    RenderQuestion(){
        this.formulario.appendChild(this.titulo);//Agregar el objeto titulo al objeto formulario
        this.formulario.appendChild(this.pregunta);//Agregar el objeto pregunta al objeto formulario
        this.formulario.appendChild(this.grupoP)// AGREGA EL OBJETVO grupoP al formulario
        this.grupoP.appendChild(this.TextSi);//Agregar el objeto TextSi al objeto grupoP
        this.grupoP.appendChild(this.opcionSi);//Agregar el objeto opcionSi al objeto grupoP
        this.grupoP.appendChild(this.TextNo);//Agregar el objeto TextNo al objeto grupoP
        this.grupoP.appendChild(this.opcionNo);//Agregar el objeto opcionNo al objeto grupoP
        this.formulario.appendChild(this.boton);//Agregar el objeto boton al objeto formulario
        this.father = document.getElementById('container-father').appendChild(this.formulario);//Agregar el formulario a la etiquete con el ID
    }
    RenderTextBox(){

        speechSynthesis.cancel();
        this.sonido.renderSound('introduzca su nombre y seguidamente Enter')
        this.formulario.appendChild(this.titulo);//Agregar el objeto titulo al objeto formulario
        this.formulario.appendChild(this.pregunta2);
        this.formulario.appendChild(this.cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
        this.formulario.appendChild(this.boton2);//Agregar el objeto boton al objeto formulario
        document.getElementById('container-father').appendChild(this.formulario);
        this.cajaTextNombres.select()
    }
    ExtraFunction(){
        var listenerbol=false
        if (listenerbol==false){
            document.addEventListener('keydown', this.KeyDawn);
        }else{
            document.removeEventListener('keydown',this.KeyDawn);
            
        }
        
    this.boton.addEventListener("click",()=>{
        this.formulario.innerHTML=''
        this.RenderTextBox()  
        listenerbol=true
        document.addEventListener('keydown', this.SelectButon2);
        if (this.opcionSi.checked == true){
            sessionStorage.setItem('invidencia',true);
          } else if(this.opcionNo.checked == true){
            sessionStorage.setItem('invidencia',false)
          }
    })
    }
    
    KeyDawn(e){
                if (e.key==='f'|| e.key==='F') {
                    document.getElementById("optionsi").checked=true
                    sessionStorage.setItem('invidencia',true)
                    document.getElementById('boton').select()
                } if(e.key==='j'|| e.key==='J') {
                    document.getElementById("optionno").checked=true;
                    sessionStorage.setItem('invidencia',false)
                    document.getElementById("boton").select()
                }
                
    }
    SelectButon2(e){
        if(e.key==='Enter'){
            document.getElementById("boton2").select()
        }
    }
}

