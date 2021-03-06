// VARIABLES //
//  http://blog.lessmilk.com/make-html5-games-with-phaser-1/
//  http://docs.phaser.io/
//  http://html5hub.com/how-to-make-a-sidescroller-game-with-html5/
var FPS = 60; // frames per second

// var grav = 0; // gravity

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var CANVAS_HEIGHT = c.height;
var CANVAS_WIDTH = c.width;


var leftBlock = {
    x: 0, // horizontal position (based on left edge)
    y: 300, // vertical position (based on top edge)
    w: 150, // width
    h: 200, // height
    color: "green", // color value // red
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

var hero = {
    x: 150, // horizontal position (based on left edge)
    y: 150, // vertical position (based on top edge)
    w: 25, // width
    h: 25, // height
    dx: 2, // horizontal velocity (left: -, right: +)
    dy: 3, // vertical velocity (up: -, down: +)
    color: "#FF0000", // color value // red
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

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
    // reverse direction when hero hits leftBlock
    if ( (hero.x < leftBlock.w ) && (hero.y > CANVAS_HEIGHT - leftBlock.h) ) {
        hero.dx = -hero.dx;
    }
    // if ( (hero.y > CANVAS_HEIGHT - leftBlock.h ) && (hero.x < leftBlock.w) ) {
    //     hero.dy = -hero.dy;
    // }
}

// DRAW //
function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clear canvas
    hero.draw();
    leftBlock.draw();
}

ctx.font = "30px Arial";
ctx.fillText("Kill 'em All!",10,50);

function startGame () {
    // UPDATE LOOP //
    $("#myButton").css("display", "none");
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);
}
