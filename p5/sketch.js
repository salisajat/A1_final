function setup() {
  // put setup code here

createCanvas (500,500);
background(0); 
}


function draw() {
  // put drawing code here
 background(0,10); //alpha background trick for fading trail
//fill(200,200,mouseX,mouseY); //function is a verb, (fill) ;; variable is a noun ???? 
fill(mouseX,mouseY,80); //function is a verb, (fill) ;; variable is a noun ???? 
if (mouseIsPressed){
	for (var i = 0; i <10; i++) { 
		ellipse(mouseX+random(10),mouseY+random(10),50,50);
	}
}
}