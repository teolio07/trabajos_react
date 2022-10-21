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
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

