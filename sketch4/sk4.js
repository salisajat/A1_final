function preload(){
  //sound = loadSound('../sketch3/Cosmic Love.mp3');
}

function setup(){
  var cnv = createCanvas(100,100);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  //sound.amp(0.2);
}

function draw(){
  background(0);

  

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
    //vertex(i, waveform[i]*height) REF THIS ON ADAMS! 
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}