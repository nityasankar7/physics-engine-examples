const Engine=Matter.Engine //namespaces
const World=Matter.World
const Bodies=Matter.Bodies
var ourEngine,ourWorld;
var ground,ball;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create()
  ourWorld=ourEngine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,20,20,ground_options);
  World.add(ourWorld,ground);
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,10,ball_options);
  World.add(ourWorld,ball);
  /*console.log(object)
  console.log(object.type)
  console.log(object.position.x)*/
}

function draw() {
  background("lightblue"); 
  Engine.update(ourEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
}
