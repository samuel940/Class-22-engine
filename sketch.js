const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,790,800,20,ground_options);
    World.add(world,ground);
    var ball_option ={
        restitution:1.5
    }
    ball = Bodies.circle(200,200,50,ball_option);
    World.add(world,ball);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
}