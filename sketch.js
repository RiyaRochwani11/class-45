const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


function setup() {
  createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
ground = new Ground (windowWidth/2,windowHeight-10,windowWidth,50);
ball= new Ball (windowWidth/2+80,windowHeight-70,70);

  
}

function draw() {
  background("blue");  
  drawSprites();
  ground.display();
  ball.display();
}