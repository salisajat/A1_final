var myX = 0; 
var myY = 0; 
var shouldIPlay = true; 


function setup(){ 
	createCanvas(600,600); 
//ele.createAudio theres more find it l8r
ele - createAudio('blah.wav');
radio = createRadio(); 
radio.option('off');
radio.option('on');
}

function draw(){



/*	if (mouseX - myX > 25 || myX - mouseX > 25) { 
		if (mouseY - myY > 10 || myY- mouseY > 10) {
			text("stars",mouseX,mouseY);
			myX = mouseX; 
			myY = mouseY; 
		}
	}
	*/
}

function mousePressed(){
	rect(mouseX, mouseY, 100,100);
	createP('this text');

		if (shouldIPlay) { 
		ele.play();
		else { 
			ele.pause;
		}
		shouldIPlay = !shouldIPlay; 
		}
	ele.speed(mouseX/width); 
	ele.volume (mouseY/height); 

	if (radio.value() === "on"){
		ele.loop();
	}else{
		ele.noLoop(); 
	} //what does radio do 
}