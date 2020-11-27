
var bullet, wall
var speed, thickness, weight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 10);

  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80)
}

function draw() {
  createCanvas(1600, 400)
  background(150, 150, 150); 
  
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed / thickness ^ 3 /* thickness * thickness */
    
    if(damage > 10){
      bullet.shapeColor = color(255, 0, 0) //red
    }
    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0) //green
    }
  }
  drawSprites();
}
function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false
}