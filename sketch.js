var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup(){
  createCanvas(600,400);
 // monkey.debug=true;
  ground=createSprite(400,350,1200,10);
  ground.x=ground.width/2;
  
  monkey=createSprite(70,330,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.16;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}
function draw(){
  background(180);
  // console.log(monkey.y);
  ground.velocityX=-4;
if(ground.x<0){
   ground.x=ground.width/2;
   }
  
  if(keyDown("space")&&monkey.y>=295){
    monkey.velocityY=-12;
  }
  food();
  obstacles();
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
     
  score=Math.ceil(frameCount/frameRate());
    
    // monkey.collide(obstacle);
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("score: " +score,100,50);
}

function food(){
  if(World.frameCount%80==0){
     banana=createSprite(620,290,40,40);
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.velocityX=-4;
     banana.y=Math.round(random(180,220));
     banana.lifetme=180;
     FoodGroup.add(banana);
   
     }
}

function obstacles(){
  if(World.frameCount%300==0){
     obstacle=createSprite(620,330,40,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-6;
     //obstacle.y=Math.round(random(180,220));
     obstacle.lifetme=180;
     obstacleGroup.add(obstacle);
     }
}


