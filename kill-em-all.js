// $(document).ready(function() {

function startGame () {
    alert("hello world");

}

// VARIABLES //

// frames per second
var FPS = 30;

// var grav = 0;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var hero = {
<<<<<<< HEAD
    x: 150,
    y: 150,
    w: 25,
    h: 25,
  //speed on the x-axis
    dx: 2,
  //speed on the y-axis
    dy: 3,
    color: "#FF0000",
=======
    x: 150, // horizontal position (left edge)
    y: 150, // vertical position (top edge)
    w: 25, // width
    h: 25, // height
    dx: 2, // horizontal velocity (left: -, right: +)
    dy: 3, // vertical velocity (up: -, down: +)
    color: "#FF0000", // color value // red
>>>>>>> eb6802f31dc780cce562664de4da4460e0f38d0d
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

var CANVAS_HEIGHT = c.height;
var CANVAS_WIDTH = c.width;

// UPDATE //
function update() {
    // update hero position
    hero.x += hero.dx;
    hero.y += hero.dy;
    // hero.dy += grav;

    // reverse direction when edges are hit
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
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clear canvas
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
