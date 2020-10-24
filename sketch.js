const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var bin1,bin2,bin3;
var bin4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,575,800,90);
	ball = new Ball(100,360);
	bin1 = new Bin(575,525,100,20);
	bin2 = new Bin(635,485,20,100);
	bin3 = new Bin(515,485,20,100);
	bin4 = new Bins(575,500);
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(255);

  fill("Black");
  text("PRESS RIGHT ARROW KEY",100,200);
  text("Throw the rubbish in the bin",100,150);


  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  ball.display();

}

function keyPressed(){
	 if (keyCode === RIGHT_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60}); } 
}
