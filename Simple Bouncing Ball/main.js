let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let x = cnv.width / 2
let y = cnv.height - 30
let r = 10;
let dx = 2
let dy = -2

let balls = []


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath();
}

requestAnimationFrame(draw);

function draw(){
    ctx.clearRect (0, 0, cnv.width, cnv.height);
    
    drawBall();
    
    if (x + dx > cnv.width - r ) {
        dx = -dx
        ctx.fillStyle = "red";
    }

    if (y + dy > cnv.height - r ) {
        dy = -dy
        ctx.fillStyle = "yellow";
    }

    if(x + dx < r) {
        dx = -dx
        ctx.fillStyle = "purple"
    }

    if(y + dy <  r) {
        dy = -dy
        ctx.fillStyle = "blue"
    }

    x += dx
    y += dy

    requestAnimationFrame(draw);
}
