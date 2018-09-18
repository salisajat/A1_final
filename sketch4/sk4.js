function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(0);
  var radius = width * 1.5;
  
  //drag to move the world.
  orbitControl();
  //  var locX = mouseX - height / 2;
  // var locY = mouseY - width / 2;

  // ambientLight(60, 60, 60);
  // pointLight(255, 255, 255, locX, locY, 100);

 // noStroke();
 stroke(random(200,255));  
  fill(0,0);
 // normalMaterial();

  translate(0, 0, -600);
  for (var e = 0; e <=2; e ++){

    for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
       var a = j/12 * PI;
      var b = i/12 * PI;
      var x = sin(2 * a) * radius * sin(b); 
      var y = cos(b) * radius / 2 ;
      var z = cos(2 * a) * radius * sin(b); 
      translate(x,y,z);

        if (x < 0) { 
          translate (frameCount*-map(x, 0, 710/2, 0, -0.2), 0, 0); 
        } else { 
          translate (frameCount*map(x, 0, 710/2, -0.2, 0 ), 0,0); 
          }

        if (y < 200) { 
          translate (0, frameCount*map(y, 0, 400/2, -0.2, 0), 0); 
        } else { 
          translate (0, frameCount*map(y, 400/2, 400, -0.2, 0 ), 0); 
          }

         if (z < 0) { 
          translate (0, 0, frameCount*-map(y, 0, 400/2, -0.2, 0)); 
        } else { 
          translate (0, 0, frameCount*map(y, 400/2, 400, -0.2, 0 )); 
          }

      cone(30,30);
       
      sphere(5,5,5);
       
      pop();  
    }
  }
    translate(x,y,z);
    scale(0.5,0.5,0.5);

        if (x < 710/2) { 
          translate (frameCount*map(x, 0, 710/2, 0, -0.2), 0, 0); 
        } else { 
          translate (frameCount*map(x, 710/2, 710, -0.2, 0 ), 0,0); 
          }

        if (y < 200) { 
          translate (0, frameCount*map(y, 0, 400/2, -0.2, 0), 0); 
        } else { 
          translate (0, frameCount*map(y, 400/2, 400, -0.2, 0 ), 0); 
          }

         if (z < 0) { 
          translate (0, 0, frameCount*map(y, 0, 500/2, -0.2, 0)); 
        } else { 
          translate (0, 0, frameCount*-map(y, 500/2, 500, 0, 0.2)); 
          }
}
}

//   for(var i = 0; i <= 12; i++){
//     for(var j = 0; j <= 12; j++){
//       push();
//        var a = j/12 * PI;
//       var b = i/12 * PI;
//       translate( random(map(a, 0, 16, -1000, 1000)) , random(map(a, 0, 16, -1000, 1000)), random(map(a, 0, 16, -1000, 1000))); 
// rotateZ(frameCount * 0.002);
//       cone(30,30);
//       pop();  
//     }
   // }

     //  push();
     //  var a = j/12 * PI;
     //  var b = i/12 * PI;
     //  var x = sin(2 * a) * radius * sin(b); 
     //  var y = cos(b) * radius / 2 ;
     //  var z = cos(2 * a) * radius * sin(b); 
     //  translate(x,y,z); 
     // // translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
     //  var x1 = sin(frameCount * 0.001 + j) * 200;
     //  var y1 = sin(frameCount * 0.001 + j) * 100;
     //  translate(x1, y1, y1);  

     //  cone(30, 30);  

     //  pop();

  // for(var i = 0; i <= 12; i++){
  //   for(var j = 0; j <= 12; j++){
  //     push();
  //     var a = j/12 * PI;
  //     var b = i/12 * PI;
  //     translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));    
  //     rotateY(1.25);
  //     cone(30, 30);  

  //     pop();
  //   }
  // }
