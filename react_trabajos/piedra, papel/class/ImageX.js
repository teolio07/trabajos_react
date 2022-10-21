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

