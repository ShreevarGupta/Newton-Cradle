const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload() {


}


function setup() {

	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
  world = engine.world;
  
	bobObject1 = new Bob(950, 500, 40);
	bobObject2 = new Bob(790, 500, 40);
	bobObject3 = new Bob(870, 500, 40);
	bobObject4 = new Bob(1030, 500, 40);
	bobObject5 = new Bob(1111, 500, 40);

	roof = new Roof(width/2, 200, 450, 40);

  bobDiameter = 40;
  rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*1, 0);
  rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
  rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*1, 0);
  rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine);

  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



