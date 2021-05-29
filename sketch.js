const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var playerRef,enemy;

function preload(){
  knife = loadImage("knife.png")
  heroIdle = loadAnimation("Sprites/idle/adventurer-idle-00.png","Sprites/idle/adventurer-idle-01.png","Sprites/idle/adventurer-idle-02.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);
  engine = Engine.create()
	world = engine.world;

  playerRef = createSprite(displayWidth/2,displayHeight/2,100,100)
  playerRef.rotateToDirection = true;
  playerRef.maxSpeed = 2;
  playerRef.friction = 0.99;

 // hero = createSprite(displayWidth/8,displayHeight-200,50,50)
 // hero.addAnimation("idle",heroIdle)
  //hero.scale = 4
}

function draw() {
  Engine.update(engine)
  background(200);  
 // playerRef.x = camera.x
 // playerRef.y = camera.y
 //playerRef.x = hero.x
// playerRef.y = hero.y
 if (mouseIsPressed) {
  playerRef.attractionPoint(0.5, mouseX, mouseY);
}
  drawSprites();
}

function shoot(){
  var projectile = createSprite(playerRef.x,playerRef.y,10,10)
  projectile.angle = playerRef.angle
  
}

