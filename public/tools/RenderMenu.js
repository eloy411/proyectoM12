class MainMenu {
    constructor(sonido){

        this.sonido = sonido
        // this.socket = socket
        this.menu = document.createElement('div')
        this.d1 = document.createElement('div')
        this.d2 = document.createElement('div')
        this.d3 = document.createElement('div')
        this.logo = document.createElement('img')
        this.chlanguaje = document.createElement('button')
        this.user = document.createElement('p')
        this.logout = document.createElement('img')
        this.button1 = document.createElement('button')
        this.button2 = document.createElement('button')

        this.sound = document.createElement('button')
        this.speaker = document.createElement('div')
        this.imageUn = document.createElement('img');
        this.info = document.createElement('button')
        this.infor = document.createElement('img')
        this.musicaF = document.createElement('audio')
        this.musica = document.createElement('source')
        this.button3 = document.createElement('button')
        this.TextBox = document.createElement('input')
        this.button4= document.createElement('button')
        this.button5=  document.createElement('button')
        this.button6=  document.createElement('button')
        this.search = 'random'
        this.state = 'public'
    }

    CallMenu(){
        
        this.SetAtributes();
        this.Render();
        this.Keydowns();
        this.ListenerButton();
        this.sonido.renderSound('pulsa F, para crear partida,o, Pulsa J, para unirte a una existente ')
    }

    SetAtributes(){
        this.menu.setAttribute('class','menu');
        this.menu.setAttribute('id','menuOscar')
        this.d1.setAttribute('class','d1');
        this.d2.setAttribute('class','d2');
        this.d3.setAttribute('class','d3');
        
        this.logo.setAttribute('class','logo');
        this.logo.setAttribute('src','img/blind.png');

        this.chlanguaje.setAttribute('class','chlanguaje');
        this.chlanguaje.setAttribute('id','chLang_b');
        this.chlanguaje.setAttribute('onclick','changeLan()');
        this.chlanguaje.innerHTML="CAMBIAR IDIOMA";

        this.user.setAttribute('class','userName');
        this.user.setAttribute('id','userN');
        this.user.innerHTML=sessionStorage.getItem('name')

        this.logout.setAttribute('src','img/exit.png');
        this.logout.setAttribute('class','logout');
        this.logout.setAttribute('onclick','logout()');
    
        this.button1.setAttribute('class','button1');
        this.button1.setAttribute('id','createGame_b');
        // this.button1.setAttribute('onclick','createGame()');
        this.button1.innerHTML="CREAR PARTIDA";
        

        this.button2.setAttribute('class','button2');
        this.button2.setAttribute('id','joinGame_b');
        // this.button2.setAttribute('onclick','joinGame()');
        this.button2.innerHTML="UNIRSE A PARTIDA";
    


        this.sound.setAttribute('class','sound');
        this.sound.setAttribute('id','mute_b');
        this.sound.setAttribute('onclick','muteUnmute()');

        this.speaker.setAttribute('id','contImg');
        this.speaker.setAttribute('class','speaker');

        this.imageUn.setAttribute('src','img/speaker.png')
        this.imageUn.setAttribute('id','unMute')

        this.info.setAttribute('class','info');
        this.info.setAttribute('id','info_b');
        this.info.setAttribute('onclick','audio_Autoplay()');

        this.infor.setAttribute('src','img/info.png');
        this.infor.setAttribute('class','infor');

        this.musicaF.setAttribute('class','thumbnail')
        this.musicaF.setAttribute('id','musicaM')
        this.musicaF.setAttribute('autoplay', 'true')
        this.musicaF.volume = 0.1;
        this.musicaF.loop = true;

        this.musica.setAttribute('src','audio/musica_fondo.mp3')
        this.musica.setAttribute('type','audio/mpeg')

        this.button3.setAttribute('class','button3');
        this.button3.setAttribute('id','randomGame');
        this.button3.innerHTML="RANDOM";

        this.TextBox.setAttribute('type', "text");
        this.TextBox.setAttribute('placeholder', "Nombre del creador de la sala");
        this.TextBox.setAttribute('class','textbox2');
        this.TextBox.setAttribute('id','textbox2');

        this.button4.setAttribute('class','button4');
        this.button4.setAttribute('id','joinGame');
        this.button4.innerHTML="UNIRSE";

        this.button5.setAttribute('class','button5');
        this.button5.setAttribute('id','publicaGame');
        this.button5.innerHTML="PUBLICA";

        this.button6.setAttribute('class','button6');
        this.button6.setAttribute('id','privadaGame');
        this.button6.innerHTML="PRIVADA";
    }
    
    Keydowns(){
        document.addEventListener('keydown', (e)=>{
            if (e.key==='f') {
                document.getElementById('createGame_b').click();
            } 
            if(e.key==='j') {
                document.getElementById('joinGame_b').click();
            }
            if(e.key==='c') {
                document.getElementById('chLang_b').click();
            }
            if(e.key==='i') {
                document.getElementById('info_b').click();
            }
            if(e.key==='m') {
                document.getElementById('mute_b').click();
            }
        });
    }

    Render(){
        this.menu.appendChild(this.d1)
        this.menu.appendChild(this.d2)
        this.menu.appendChild(this.d3)
        this.menu.appendChild(this.musicaF)
        this.d1.appendChild(this.logo)
        this.d1.appendChild(this.chlanguaje)
        this.d1.appendChild(this.logout)
        this.d1.appendChild(this.user)
        this.d2.appendChild(this.button1)
        this.d3.appendChild(this.button2)
        this.d3.appendChild(this.sound)
        this.d3.appendChild(this.info)
        this.sound.appendChild(this.speaker)
        this.speaker.appendChild(this.imageUn)
        this.info.appendChild(this.infor)
        this.musicaF.appendChild(this.musica)
        document.getElementById('container-father').appendChild(this.menu)

    }

    ListenerButton(){
        this.button2.addEventListener('click',()=>{
            this.d2.innerHTML =''
            this.d3.innerHTML =''
            this.menu.innerHTML=''
            this.RenderJoinScrean()
        })
        this.button1.addEventListener('click',()=>{
            this.d2.innerHTML =''
            this.d3.innerHTML =''
            this.menu.innerHTML=''
            this.RenderCreateScrean()
        })
    }
    RenderJoinScrean(){
        this.menu.appendChild(this.d1)
        this.menu.appendChild(this.d2)
        this.menu.appendChild(this.d3)
        this.menu.appendChild(this.musicaF)
        this.d1.appendChild(this.logo)
        this.d1.appendChild(this.chlanguaje)
        this.d1.appendChild(this.logout)
        this.d1.appendChild(this.user)
        this.d2.appendChild(this.button3)
        this.d3.appendChild(this.TextBox)
        this.d3.appendChild(this.button4)
        this.d3.appendChild(this.sound)
        this.d3.appendChild(this.info)
        this.sound.appendChild(this.speaker)
        this.speaker.appendChild(this.imageUn)
        this.info.appendChild(this.infor)
        this.musicaF.appendChild(this.musica)
        document.getElementById('container-father').appendChild(this.menu)
        this.KeyDawnJoinScrean()
    }
    RenderCreateScrean(){
        this.menu.appendChild(this.d1)
        this.menu.appendChild(this.d2)
        this.menu.appendChild(this.d3)
        this.menu.appendChild(this.musicaF)
        this.d1.appendChild(this.logo)
        this.d1.appendChild(this.chlanguaje)
        this.d1.appendChild(this.logout)
        this.d1.appendChild(this.user)
        this.d2.appendChild(this.button5)
        this.d3.appendChild(this.button6)
        this.d3.appendChild(this.sound)
        this.d3.appendChild(this.info)
        this.sound.appendChild(this.speaker)
        this.speaker.appendChild(this.imageUn)
        this.info.appendChild(this.infor)
        this.musicaF.appendChild(this.musica)
        document.getElementById('container-father').appendChild(this.menu)
        this.KeyDawnCreateScrean()
    }
    KeyDawnJoinScrean(){
    document.addEventListener('keydown', (e)=>{
         if (e.key==='f'|| e.key==='F') {
            document.getElementById("randomGame").click()
         } if(e.key==='Shift') {
             document.getElementById("textbox2").select()
         }if(e.key==='Enter'){
            document.getElementById("joinGame").click()
         }
     })
     }
     
     KeyDawnCreateScrean(){
        document.addEventListener('keydown', (e)=>{
             if (e.key==='f'|| e.key==='F') {
                document.getElementById("publicaGame").click()
             } if(e.key==='j'|| e.key==='J') {
                 document.getElementById("privadaGame").click()
         }})
         }   
}