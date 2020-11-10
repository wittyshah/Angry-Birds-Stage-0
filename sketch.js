const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true    
    }


    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    box1 = new Box(200, 200, 50, 50);
    box2 = new Box(240, 100, 50, 100);

}
  

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    box1.display();
    box2.display();
}