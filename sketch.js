const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    
    ground = new platform(600,200,100,10);
    ground2 = new platform(300,300,100,10)
    polygon = Bodies.circle();
    World.add(world,polygon);

    Box1= new Box(600,180,25,25);
    Box2= new Box(625,180,25,25);
    Box3= new Box(575,180,25,25);
    Box4= new Box(620,155,25,25);
    Box5= new Box(595,155,25,25);
    Box6= new Box(600,130,25,25);

    Box7= new Box(300,335,25,25);
    Box8= new Box(325,335,25,25);
    Box9= new Box(275,335,25,25);
    Box10= new Box(320,310,25,25);
    Box11= new Box(275,310,25,25);
    Box12= new Box(300,285,25,25);

    slingShot = new SlingShot(this.polygon,{x:100,y:200})

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  
  ground.display();
  ground2.display();
  slingshot.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}