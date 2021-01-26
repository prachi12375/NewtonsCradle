
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200, 550, 100);
	bob2 = new Bob(300, 550, 100);
	bob3 = new Bob(400, 550, 100);
	bob4 = new Bob(500, 550, 100);
	bob5 = new Bob(600, 550, 100);
	roof1 = new Roof(400, 200, 600, 50);
  chain1 = new Chain(bob1.body, {x:200, y:200})
  chain2 = new Chain(bob2.body, {x:300, y:200})
  chain3 = new Chain(bob3.body, {x:400, y:200})
  chain4 = new Chain(bob4.body, {x:500, y:200})
  chain5 = new Chain(bob5.body, {x:600, y:200})

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bob5.body, {x:mouseX, y:mouseY});
}



