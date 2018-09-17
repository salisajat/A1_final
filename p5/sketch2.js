function setup(){ 
createCanvas(600,600); 
}

function draw(){
	//background(frameCount%255);/// use the ampersams to map!!!! it gets u the remainder
	//background(0); 
	if(mouseIsPressed){
		push();
		translate(mouseX,mouseY); //tells it 0,0 is now mousex mousey
		rotate(frameCount/5);//use radians rotate PI for flip
		text("stars",0,0);
		pop(); //use push and pop to go back to old way, isolate this chunk, resets it
	}else{
		text("stars",mouseX,mouseY);
	}
}