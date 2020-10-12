var bullet, wall;
var speed, weight;
var thickness;
//variables

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
//randomizes the different variables

  bullet=createSprite(50, 200, 55, 24);
  bullet.shapeColor=color(1000,1000,1000);
//bullet sprite

  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
//wall sprite

  bullet.velocityX = speed;
  //speed is the velocity of the bullet
}

function draw() {
  background(0);  

console.log(bullet.x);
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;

    var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
//calculates dmg

    if(damage> 10){

      wall.shapeColor=color(255,0,0);
    }
//red

    if(damage< 10){

      wall.shapeColor=color(0,255,0);
    }
  }  
//green

  drawSprites();
}

function hasCollided(lbullet, lwall){

  bulletRightEdge=lbullet.x+lbullet.width;

  wallLeftEdge=lwall.x

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}