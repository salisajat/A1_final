//reference https://medium.com/@mhiratsuka/explore-p5-js-with-webgl-755a019be2b4
let degree = 0; 
var value = 0;
var flip = 1; 

function setup() {
	createCanvas(450,450,WEBGL); 
}

function draw() { 
	background(0); 
	fill(random(200,255)); 
	noStroke(); 
	//ellipse(0,0,60,60); test

	for (let i = 0; i <10; i++){ 
		push(); 
		rotateX(degree); 
		rotateY(degree); 
	//rotateX(degree); 

	translate (mouseX, mouseY*flip, value); 

	torus (20,8); //(r, tube r)

	degree += 0.35; 
	pop(); 
}
}

function mouseDragged() {
	value = value + 5;
	if (value > 255) {
		value = 0;
	}
	console.log(value); 
	flip = flip *-1; 
}