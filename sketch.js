var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50)
  wall = createSprite(800,200,60,height/2)
  wall.shapeColor = "blue"
  car.velocityX = speed;

 }

function draw() {
  background(255,255,255);  
  drawSprites();
  if(car.isTouching(wall)){
    car.velocityX = 0
     deformation = 0.5*weight*speed*speed/22500
  }
  if(deformation<100)
  car.shapeColor = "green"
  else if(deformation<180)
  car.shapeColor = "yellow"
  else
  car.shapeColor = "red"
}