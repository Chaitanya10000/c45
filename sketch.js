const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var circle1,circle2,circle3;


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);

  circle1 = new Circles(100,50,20);
  circle2 = new Circles(280,30,20);
  circle3 = new Circles(500,200,20);

  for(var i = 0;i < 800; i = i +50 ){
    new Circles(i,50,20);
  }

}

function draw() {
  background("black"); 
  circle1.display();
  circle2.display();
  circle3.display();
  for(var i = 0;i < 800; i = i +50 ){
   
  }
  


  drawSprites();
  Engine.update(engine);
}