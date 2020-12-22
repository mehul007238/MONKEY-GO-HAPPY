
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  //obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
monkey = createSprite(100,320,20,20);
monkey.addAnimation("monkey",monkey_running);  
monkey.scale = 0.2; 
  
ground = createSprite(400,380,900,10);
ground.velocityX = -4;
ground.x=ground.width/2;
console.log(ground.x);
  
banana = createSprite(200,200,20,20);
banana.addImage("banana",bananaImage);
banana.scale = 0.1; 
  
invisibleGround = createSprite(200,380,800,5);
invisibleGround.visible = true; 
  
}


function draw() {
background("white");
  
 if(keyDown("space") ) {
        monkey.velocityY = -12;
    }
  
if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }   
  
monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(invisibleGround); 
  
drawSprites();  
}






