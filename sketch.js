
var x= 0;
var rojo,verde,azul;

function setup() {
	createCanvas(800, 500);
}


function draw() {
	frameRate(1);
	rojo = random(0,255);
	verde = random(0,255);
	azul = random(0,255);

	background(200);
	fill(rojo,verde,azul);
	ellipse(mouseX,mouseY,200,200);
  	//sphere(50);
  	//rect(200, 200, 200, 200);
}