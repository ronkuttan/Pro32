
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg,log1;
var slingshot,ground1,pine1,straw1,grape1,tnnt1,chest,ninja1;



function preload(){
  bgImg = loadImage("images/bg.jpg");
 
}
function setup() {
  createCanvas(1500,710);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(920,580,670,15)
  ground2 = new Ground(920,430,670,15)
  ground3 = new Ground(920,280,670,15)
  ground4 = new Ground(920,130,670,15)

  log1=new Log(615,205,15,137.5)
  log2=new Log(615,355,15,137.5)
  log3=new Log(615,505,15,137.5)
  
  log4=new Log(750,205,15,137.5)
  log5=new Log(750,355,15,137.5)
  log6=new Log(750,505,15,137.5)
  
  log7=new Log(895,205,15,137.5)
  log8=new Log(895,355,15,137.5)
  log9=new Log(895,505,15,137.5)
  

  log10=new Log(1030,205,15,137.5)
  log11=new Log(1030,355,15,137.5)
  log12=new Log(1030,505,15,137.5)
  
  log13=new Log(1220,205,15,137.5)
  log14=new Log(1220,355,15,137.5)
  log15=new Log(1220,505,15,137.5)

  pine1 = new PineApple(680,205)
  pine2 = new PineApple(963,353.5)
  pine3 = new PineApple(823,504)
 
  straw1 = new Strawberry(965,210)
  straw2 = new Strawberry(825,355)
  straw3 = new Strawberry(685,505)
  
  grape1 = new Grape(825,205)
  grape2 = new Grape(685,355)
  grape3 = new Grape(965,505)
  
  tnnt1 = new TNT(1167,205)
  tnnt2 = new TNT(1085,205)
  tnnt3 = new TNT(1167,505)
  tnnt4 = new TNT(1085,505)
 
  chest = new Chest(1127,355);

  ninja1 = new ninja(150,450);
  
  slingshot = new SlingShot(ninja1.body,{x:150, y:450});

  
  
}

function draw() {
  background(bgImg);  
 Engine.update(engine)

 ground1.display()
 ground2.display()
 ground3.display()
 ground4.display()

 log1.display();
 log2.display();
 log3.display();
 
 log4.display();
 log5.display();
 log6.display();
 
 log7.display();
 log8.display();
 log9.display();
 
 log10.display();
 log11.display();
 log12.display();
 log13.display();
 log14.display();
 log15.display();
 
 pine1.display();
 pine2.display();
 pine3.display();

 straw1.display();
 straw2.display();
 straw3.display();

 grape1.display();
 grape2.display();
 grape3.display();

 tnnt1.display();
 tnnt2.display();
 tnnt3.display();
 tnnt4.display();

 chest.display();

 ninja1.display();

 slingshot.display();

 
}

function mouseDragged(){
 
      Matter.Body.setPosition(ninja1.body, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ninja1.body, {x: 100, y:450});
      slingshot.attach(ninja1.body);
}
}

/*
function detectollision(lninja,llog){
	ninjaBodyPos = lninja.body.position
	logBodyPos = llog.body.position


	var distance = dist(ninjaBodyPos.x,ninjaBodyPos.y,logBodyPos.x,logBodyPos.y)
	 if(distance<=llog.r+lninja.r){
		 Matter.Body.setVisible(llog.body,false);

	 }
}
*/
