var bullet;
var wall,thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

car = createSprite(50, 200, 50, 50);

car.velocity=speed;

car.shapeColor = color(255);


wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0);  
if(isBouncing(bullet,wall))
{

  car.velocityX=0;
  var damage = 0.5 * weight * speed* speed/(thickness * thickness*thickness);
  if(damage>10){

    car.shapeColor = color(255,0,0);
  }



  if(damage<10){

    car.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}

function isBouncing (lwall,lbullet){
bulletRightEdge=lbullet=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}