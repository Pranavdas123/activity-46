var bg,bg_img;
var balloon,balloon_img;
var low_ground,top_ground;
var obsbottom,obsbottom1,obsbottom2,obsbottom3;
var obstacleTop,obsTop1,obsTop2;

function preload(){
  bg_img = loadImage("assets/bg.png");
  balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");
  obsbottom1 = loadImage("assets/obsBottom1.png");
  obsbottom2 = loadImage("assets/obsBottom2.png");
  obsbottom3 = loadImage("assets/obsBottom3.png");
}

function setup(){
  bg = createSprite(165,485,1,1);
  bg.addImage(bg_img);
  bg.scale = 1.5;

  low_ground = createSprite(170,600,1190,20);
  low_ground.visible = false;

  top_ground = createSprite(170,100,1190,20);
  top_ground.visible = false;

  balloon = createSprite(100,250,50,50);
  balloon.addAnimation("balloon",balloon_img);
  balloon.scale = 0.35
}

function draw(){
  createCanvas(1000,600)
  
  //flying the balloon
  if(keyDown("space")){
    balloon.velocityY = -6
  }

  //adding gravity 
  balloon.velocityY+= 1
  
  drawSprites()

  spawnAir()

  spawnGround()
}


function spawnAir(){
  if(World.frameCount%120 === 0){
    obstacleTop = createSprite(1000,200,50,50);
    obstacleTop.scale = 0.2;
    obstacleTop.velocityX = -2;
    obstacleTop.y = Math.round(random(50,200));

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : obstacleTop.addImage(obsTop1)
                break;  
      case 2 : obstacleTop.addImage(obsTop2)  
                break;
      default:break;          
    }
    obstacleTop.lifetime = 1000
    balloon.depth +=1
  }
}
                         
function spawnGround(){
  if(World.frameCount%150 === 0){
    obsbottom = createSprite(1000,465,50,50);
    obsbottom.scale = 0.15;
    obsbottom.velocityX = -2;
    
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1 : obsbottom.addImage(obsbottom1)
                break;  
      case 2 : obsbottom.addImage(obsbottom2)  
                break;
      case 3 : obsbottom.addImage(obsbottom3)
                break;            
      default:break;          
    }
    obsbottom.lifetime = 1000
    balloon.depth +=1
  }
}
