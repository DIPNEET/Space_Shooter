
var player=createSprite(200,375,20,20);
player.setAnimation("player");

var spaceship;
var gameState="play";

var score=0;

var starG=createGroup();
var enemyG=createGroup();
var bulletG=createGroup();

function draw() {

  background("black");
  
  drawSprites();
  
  createEdgeSprites(); 
  player.collide(edges);

if(gameState==="play"){
  if(keyDown("left")){
    player.x-=10

   }
  if(keyDown("right")){
    player.x+=10

   }
  stars()

  enemy()

  if(keyDown("space")){
    bullet()
  }


  if(bulletG.isTouching(enemyG)){
    spaceship.destroy()
    bulletG.destroyEach()
    score+=1
  }
  if(enemyG.collide(bottomEdge)){
    gamestate= "end2"
    enemyG.destroyEach()
  
  }
  if(score===5){
    gameState="end1"
  }


}
else if(gameState==="end1"){
  textSize(40)
  text("VICTORY!",80,200)



}
else if(gameState==="end2"){
   textSize(40)
   text("GAME OVER!",80,200)

}

 
  textSize(22);
  text("score:"+score,250,30);
  
}
  
  function stars(){
    if(World.frameCount%50===0){
      var star=createSprite(randomNumber(0,400),0,20,20) 
      star.velocityY=2
      star.setAnimation("star_1")
      star.lifetime=400/2
      starG.add(star)
    }
    
  }
  
  function enemy(){
    if(World.frameCount%80===0){
     spaceship=createSprite(randomNumber(0,400),0,20,20)
     spaceship.velocityY=3
     var r=randomNumber(1,4)
     spaceship.setAnimation("a"+r)
     enemyG.add(spaceship)
     enemy.lifetime= 400/3
    }
  }
  
  function bullet(){
    
    if(World.frameCount%3===0){
      var bullet=createSprite(player.x,player.y,5,10)
      bullet.velocityY=-15
      bullet.shapeColor="white"
      bulletG.add(bullet)
      bullet.lifetime=40
    } 
    
  }
  
