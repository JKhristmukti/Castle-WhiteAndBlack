const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,door;

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  b5 = new BRICKS(200,220,30,30);
  b6 = new BRICKS(155,220,30,30);
  b7 = new BRICKS(245,220,30,30);
  b8 = new BRICKS(555,220,30,30);
  b9 = new BRICKS(600,220,30,30);
  b10 = new BRICKS(645,220,30,30);
  b1 = new BRICKS(400,490,700,10);
  b2 = new BRICKS(200,360,120,250);
  b3 = new BRICKS(600,360,120,250);
  b4 = new BRICKS(400,385,280,200);

  door = createSprite(400,440,100,80);
  door.shapeColor=color(0,0,0);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
  b1.display(); 
  b2.display(); 
  b3.display(); 
  b4.display(); 
  b5.display();
  b6.display(); 
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  drawSprites();
}