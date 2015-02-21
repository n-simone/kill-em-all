// $(document).ready(function() {

function startGame () {
    alert("hello world");

    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World",10,50);
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

// var d = document.getElementById("myCanvas");
// var dtx = d.getContext("2d");
// dtx.moveTo(0,0);
// dtx.lineTo(200,100);
// dtx.stroke();



// });
