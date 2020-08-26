

var wall,thickness;
var bullet, speed,weight;
var lwall, lbullet;



function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(200,200,10,10);
  bullet.debug=true;
  wall=createSprite(600,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.debug=true;
}

function draw() {
  background(0);
  drawSprites();
  bullet.velocityX=speed/10;
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  }
    if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

    if(damage<10)
    {
      wall.shapeColor=color(0,25,0);
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

  
}




