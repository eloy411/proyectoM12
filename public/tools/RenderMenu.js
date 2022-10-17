class MainMenu {
    constructor(){
        
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
        this.exit = document.createElement('button')
        this.sound = document.createElement('button')
        this.speaker = document.createElement('div')
        this.imageUn = document.createElement('img');
        this.info = document.createElement('button')
        this.infor = document.createElement('img')
        this.musicaF = document.createElement('audio')
        this.musica = document.createElement('source')

        this.search = 'random'
    }

    CallMenu(){
        
        this.SetAtributes();
        this.Render();
        this.Keydowns();
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
    
        this.exit.setAttribute('class','exit');
        this.exit.setAttribute('id','exit_b');
        this.exit.setAttribute('onclick','exit()');
        this.exit.innerHTML="SALIR";

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
        this.d3.appendChild(this.exit)
        this.d3.appendChild(this.sound)
        this.d3.appendChild(this.info)
        this.sound.appendChild(this.speaker)
        this.speaker.appendChild(this.imageUn)
        this.info.appendChild(this.infor)
        this.musicaF.appendChild(this.musica)
        document.getElementById('container-father').appendChild(this.menu)
        // this.createGame(this.socket)
    }

    // renderWaiting(){
    //    this.d2.removeChild(this.d2.children[0])
    //    this.d3.removeChild(this.d3.children[0])
    //    const text = document.createElement('h1')
    //    text.innerText = 'WAITING FELLOW...'
    //    text.style.color = 'white'
    //    this.d2.appendChild(text)
    // }
   
        
    
}