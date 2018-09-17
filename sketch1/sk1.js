//ref https://p5js.org/examples/lights-directional.html
var radius = 80;

function setup() {
	createCanvas(710, 400, WEBGL);
	noStroke();
	fill(200);
}

function draw() {
	noStroke();
	background(20);
	var dirY = (mouseY / height - 0.5) * -4;
	var dirX = (mouseX / width - 0.5) * -4;
	if (mouseX<710/2) { 
		console.log(0); 
		var dirZ = map(mouseX, 0, 710/2, 1, -1);
	} else {
		console.log(1); 
		var dirZ = map(mouseX, 710/2, 710, -1, 1);
		}
	//var dirZ = (mouseX / width - 0.5) * -20;
	//var dirZ = ((mouseY / height - 0.5) + (mouseX / width - 0.5)) * -10;
	directionalLight(204, 204, 204, dirX, dirY, dirZ); 
	//directionalLight(v1, v2, v3, nx, ny, nz)

	translate(0, 0, 0);
	sphere(radius);



}