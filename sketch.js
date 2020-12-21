
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,ball,ball2,ball3,ball4


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
   roof1 = new Roof(200,200,200,200)
  ball = new Ball(200,300,20,20)
  ball2 = new Ball(100,300,20,20)
  ball3 = new Ball(500,300,20,20)
  ball4 = new Ball(10,300,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ball2.display()
  ball3.display()
  ball4.display()
  roof1.display()
  drawSprites();
 
}



