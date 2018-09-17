var system;

function setup() {
  createCanvas(400, 720);
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  //sbackground(mouseY, mouseY, 100);
  background(20); 
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-2, 2), random(0,3)); //(l-r, u-d)
  this.position = position.copy();
  this.lifespan = 255; //NOT about colour, just lifespan
  this.position.x = mouseX; //SO THIS WORKED
  this.position.y = mouseY;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;

  if (this.position.y >715){ 
    // this.velocity = 0;
    // this.acceleration = 0; 
    this.position.y = 715; 
  }
};

// Method to display
Particle.prototype.display = function() { 
  stroke(200, this.lifespan); 
  strokeWeight(2);
  fill(127, mouseY, mouseX, this.lifespan);
  //ellipse(MouseX, MouseY, 12, 12);
  ellipse(this.position.x, this.position.y, 12, 12); // WHEN IS x declared??!!

};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);  //Inserts a value or array of values into an existing array.
    }
  }
};
