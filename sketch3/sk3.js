ref: https://p5js.org/examples/input-mouse-signals.html, https://p5js.org/examples/interaction-wavemaker.html
var xvals = [];
var yvals = [];
var bvals = [];
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  stroke('white'); 
  fill(100);
}

function draw() {
  //background(10, 10); // translucent background (creates trails)
  background(10,200);

 background(237,34,93);
  
  for(var i = 1; i < width; i++) { 
    xvals[i-1] = xvals[i]; 
    yvals[i-1] = yvals[i];
    bvals[i-1] = bvals[i];
  } 
  // Add the new values to the end of the array 
  xvals[width-1] = mouseX;
  yvals[width-1] = mouseY;

  if(mouseIsPressed) {
    bvals[width-1] = 0;
   	t = t - 0.01; 
  } else {
    bvals[width-1] = 255;
  }
  

  console.log (xvals[i-1]);


  // make a x and y grid of ellipses
  for (let x = 80; x <= width - 80; x = x + 30) {
    for (let y = 80; y <= height - 80; y = y + 30) {
      // starting point of each circle depends on mouse position
      let xAngle = map(xvals[i-2], 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(yvals[i-2], 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);



      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time


  fill(255);
  noStroke();

  // for(var i=1; i<width; i++) {
  //   stroke(255);
  //   point(i, xvals[i]/3);
  //   stroke(0);
  //   point(i, height/3+yvals[i]/3);
  //   stroke(255);
  //   line(i, 2*height/3+bvals[i]/3, i, (2*height/3+bvals[i-1]/3));
  // }


  
}