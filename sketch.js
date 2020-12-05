const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground2,ball,ball2,ball3;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 // ball=Bodies.circle(200,100,15,{restitution:1});
 
  //World.add(world,ball);
  
 
  ball2 = new box(300,100,50,50);
  ball3 = new box(320,50,50,50);
  ground2=new ground(400,390,800,30);
  console.log(ball3);
  console.log(ground2.type);
}

function draw() {
  background("red");
  Engine.update(engine);
 //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,15,15);
 ground2.display();
  ball2.display(); 
  ball3.display();
}