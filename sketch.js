var car ;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(800,1000);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(600,200,20,70);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  
  car.velocityX=speed;

  if (wall.x-car.x<(car.width+wall.width)/2) {
    
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22500;
     
     if(deformation>180){
       car.shapeColor=color(255,0,0);
     }

      if(deformation<180){
        car.shapeColor=color(0,225,0);
      }
     
      if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);
      }

  }  
    
  
  drawSprites();


}