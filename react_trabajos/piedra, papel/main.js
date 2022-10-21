//--------class------------
class ImageX{
    constructor(x,y,w,h){
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext('2d');
        this.nImage = 0;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    drawImag(){
        //0  = papel  ,  1 = piedra, 2 = tijera

        let images = ['img/0.jpg','img/1.jpg','img/2.jpg'];
        let image = new Image();
        let numberX = (Math.random()*2);
        let number = Math.round(numberX);
        this.nImage = number;
        image.src=[images[number]];
        this.ctx.beginPath();
        this.ctx.drawImage(image,this.x,this.y,this.w,this.h)
        this.ctx.closePath();
    }
}

class Square{
    constructor(x,y,w,h,color){
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext('2d');

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    drawSquare(){
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.w,this.h);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}


    //-----variables-------
    let counter = document.getElementById('layer-counter');
    let btnPaper = document.getElementById('paper');
    let btnStone = document.getElementById('stone');
    let btnScissors = document.getElementById('scissors');
    let layerQuestion = document.getElementById('container-layer-question-sign');
    let nameUser = document.getElementById('name-user');
    let pointsPlayer = 0;
    let pointsMachine = 0;
    let nImage = 0;

    let start;

    //-----------functions secondary
    function stop(){
        clearInterval(start);
    }

    function restart (){
        start = setInterval(draw,3);
    }

    function alertSwal(message){
        Swal.fire({
            title: message,
            showCancelButton: true,
            confirmButtonText: "Continuar",
            cancelButtonText: "Salir",
            
        })
        .then(res => {
            if(res.isConfirmed){
                restart()
            }
            console.log(res)
            
        })
    }
    //-----------alerts
    function showWarningPlayer(){
        alertSwal('Punto para jugador');
        layerQuestion.style.display = 'block';
    }

    function showWarningMachine(){
        alertSwal('Punto para la maquina');
        layerQuestion.style.display = 'block';
    }

    function showWarningTied(){
        alertSwal('Ninguno gana punto');
        layerQuestion.style.display = 'block';
    }

    

    //------------Alert primary----------
    
    Swal.fire({
        title: "Nombre jugador",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Iniciar",
        cancelButtonText: "Salir",
        inputValidator: name => {
            if(!name){
                return 'Ingresa tu nombre'
            }else{
                return undefined;
            }
        }
    })
    .then(res => {
        if (res.value) {
            nameUser.textContent = res.value;
            restart()
        }else if(res.isDismissed){
            window.close();
        }else{
            console.log('algo salio mal')
        }
        
    })

        //0  = papel  ,  1 = piedra, 2 = tijera


    //--------------events---------

    btnPaper.addEventListener('click',(e)=>{
        stop();
        let paper = 0;
        if(paper == nImage){
            //tied
            layerQuestion.style.display = 'none';
            setTimeout(showWarningTied,500) ;
            
        } else if(nImage == 1){
            //paper win stone
            pointsPlayer += 1;
            layerQuestion.style.display = 'none';
            setTimeout(showWarningPlayer,500) ;

        } else if(nImage == 2){
            //scissors win paper
            pointsMachine += 1;
            layerQuestion.style.display = 'none';
            setTimeout(showWarningMachine,500) ;


        } else{
            console.log('algo salio mal');
        }
        counter.textContent = `${pointsPlayer}:${pointsMachine}`;
    });
        //0  = papel  ,  1 = piedra, 2 = tijera
    
    btnStone.addEventListener('click',(e)=>{
        stop();
        let stone = 1;
        if(stone == nImage){
            //tied
            layerQuestion.style.display = 'none';
            setTimeout(showWarningTied,500) ;

        } else if(nImage == 0){
            //paper win stone
            pointsMachine += 1;
            layerQuestion.style.display = 'none'
            setTimeout(showWarningMachine,500) ;

        }  else if(nImage == 2){
            //Stone win scissors
            pointsPlayer += 1;
            layerQuestion.style.display = 'none'
            setTimeout(showWarningPlayer,500) ;

        }else{
            console.log('algo salio mal');
        }
        counter.textContent = `${pointsPlayer}:${pointsMachine}`
    });
        //0  = papel  ,  1 = piedra, 2 = tijera
    
    btnScissors.addEventListener('click',(e)=>{
        stop();
        let scissors = 2;
        if(scissors == nImage){
           //tied
           layerQuestion.style.display = 'none';
           setTimeout(showWarningTied,500) ;

        } else if(nImage == 1){
            //Stone win scissors
            pointsMachine += 1;
            layerQuestion.style.display = 'none';
            setTimeout(showWarningMachine,500) ;

        }  else if(nImage == 0){
             //scissors win paper
             pointsPlayer += 1;
             layerQuestion.style.display = 'none';
             setTimeout(showWarningPlayer,500) ;

        }else{
            console.log('algo salio mal');
        }
        counter.textContent = `${pointsPlayer}:${pointsMachine}`
    });



//---------function primary-----------

function draw() {
    let img = new ImageX(400,220,150,150);
    img.drawImag();
    nImage = img.nImage
    
    let square = new Square(400,220,150,150,'black');
    square.drawSquare();

    if(pointsPlayer == 3){
        stop();
        Swal.fire('gana player')
    }else if(pointsMachine == 3){
        stop() 
        Swal.fire('gana maquina')

    }
};











    
 



    



