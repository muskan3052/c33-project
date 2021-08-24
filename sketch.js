const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, bgImg;
var kid1, kid1Img, kid2, kid2Img;
var snow=[]

function preload(){
  bgImg= loadImage("snow1.jpg");
  kid1Img=loadImage("kid1.png");
  kid2Img=loadImage("kid2.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
world = engine.world;
  createEdgeSprites();
  kid1 = createSprite(750,300);
  kid1.addImage("kid1Label", kid1Img);
  kid1.scale=.2;
  kid2 = createSprite(200,300);
  kid2.addImage("kid2Label", kid2Img);
  kid2.scale=.3;

}

function draw() {
  background(bgImg); 
  Engine.update(engine)
  if(kid1.x>350){
    kid1.velocityX=-2;
  }
  else{
    kid1.velocityX=0;
  }
  

  //create the particles using frameCount
if(frameCount%2===0){
  snow.push(new Snow(random(0,800),0))
}

  //display the particles 
for (var k = 0; k < snow.length; k++){
  snow[k].display();
}

drawSprites();
}
  
