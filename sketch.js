
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,20);
	World.add(world,roof);

	bob1 = new Bob(400,400,50,50,{isStatic:true})
	bob2 = new Bob(500,400,50,50,{isStatic:true})
	bob3 = new Bob(450,400,50,50,{isStatic:true})
	bob4 = new Bob(350,400,50,50,{isStatic:true})
	bob5 = new Bob(300,400,50,50,{isStatic:true})

	chain1 = new Chain(bob1.body,roof.body,-bob1.Diameter*2,0);
	chain2 = new Chain(bob2.body,roof.body,-bob2.Diameter*2,0);
	chain3 = new Chain(bob3.body,roof.body,-bob3.Diameter*2,0);
	chain4 = new Chain(bob4.body,roof.body,-bob4.Diameter*2,0);
	chain5 = new Chain(bob5.body,roof.body,-bob5.Diameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  chain5.display();
  chain4.display();
  chain3.display();
  chain2.display();
  chain1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
  
}



