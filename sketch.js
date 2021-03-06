const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;

function preload(){
polygonImg=loadImage("polygon.png");

}

function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;
Engine.run(engine);

ground=new Ground();
stand1=new stand(390,300,250,10);
stand2=new stand(700,200,200,10);

//stand1
//level1
block1=new box(300,275,30,40);
block2=new box(330,275,30,40);
block3=new box(360,275,30,40);
block4=new box(390,275,30,40);
block5=new box(420,275,30,40);
block6=new box(450,275,30,40);
block7=new box(480,275,30,40);
//level2
block8=new box(330,235,30,40);
block9=new box(360,235,30,40);
block10=new box(390,235,30,40);
block11=new box(420,235,30,40);
block12=new box(450,235,30,40);
//level3
block13=new box(360,195,30,40);
block14=new box(390,195,30,40);
block15=new box(420,195,30,40);
//top
block16=new box(390,155,30,40);

//stand2
//level1
blocks1=new box(640,175,30,40);
blocks2=new box(670,175,30,40);
blocks3=new box(700,175,30,40);
blocks4=new box(730,175,30,40);
blocks5=new box(760,175,30,40);
//level2
blocks6=new box(670,135,30,40);
blocks7=new box(700,135,30,40);
blocks8=new box(730,135,30,40);
//top
blocks9=new box(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

Slingshot=new slingshot(this.ball,{x:100,y:200});


}

function draw() {
  background(255,255,255); 
ground.display();

  stand1.display();
  stand2.display();

fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
fill("gray");
  block16.display();

  fill("skyblue");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("turquoise");
blocks6.display();
blocks7.display();
blocks8.display();
fill("pink");
blocks9.display();

fill("gold");
imageMode(CENTER);
image(polygonImg,ball.position.x,ball.position.y,40,40);

Slingshot.display();

  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  Slingshot.fly();
  
}
