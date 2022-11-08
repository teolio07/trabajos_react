let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let projectileXPos = 10;
let projectileYPos = 10;
let projectileDxPos = 2;
let projectileDyPos = -2;



function drawBall() {
    ctx.beginPath();
    ctx.arc(projectileXPos, projectileYPos, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    projectileXPos += projectileDxPos ;
    projectileYPos+= projectileDxPos;
}
setInterval(draw,50)
