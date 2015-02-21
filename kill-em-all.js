// $(document).ready(function() {

function startGame () {
    alert("hello world");

    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World",10,50);
}

// VARIABLES //

var FPS = 30;

var grav = 0;

var hero = {
    x: 150,
    y: 150,
    w: 25,
    h: 25,
    dx: 2,
    dy: 3,
    color: "#FF0000",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var CANVAS_HEIGHT = c.height;
var CANVAS_WIDTH = c.width;

// UPDATE //
function update() {
    hero.x += hero.dx;
    hero.y += hero.dy;
    hero.dy += grav;
    if ( (hero.x > CANVAS_WIDTH - hero.w) || (hero.x < 0) )
    {
        hero.dx = -hero.dx;
    }
    if ( (hero.y > CANVAS_HEIGHT - hero.h) || (hero.y < 0) )
    {
        hero.dy = -hero.dy;
    }
}

// DRAW //
function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    hero.draw();
}

// UPDATE LOOP //
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

// var d = document.getElementById("myCanvas");
// var dtx = d.getContext("2d");
// dtx.moveTo(0,0);
// dtx.lineTo(200,100);
// dtx.stroke();



// });
