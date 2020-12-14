//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Create our Physics engine for our game
  myEngine = Engine.create();   //myEngine.world

  //Store the game world created in myWorld
  myWorld = myEngine.world;

  //Create a game object
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(myWorld, ground);

  var ball_options = {
    restitution : 0.8
  }
  ball = Bodies.circle(200,100,20, ball_options)
  World.add(myWorld ,ball)
}

function draw() {
  background("black"); 
  
  Engine.update(myEngine);

  //rect(xPosition, yPosition, width, height)
  fill("brown")
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  //ellipse(xPosition, yPosition, xRadius, yRadius);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

}