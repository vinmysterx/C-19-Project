var boyImg, boy;
var roadImg, road;
var dogImg, dog;
var treeImg, tree;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
 boyImg = loadImage("boy.png");
 roadImg = loadImage("road.png");
 dogImg = loadImage("dogRunning.png");
 treeImg = loadImage("tree.png");
}

function setup() {
 createCanvas(600,600);
 
 road = createSprite(300,300);
 road.addImage("road", roadImg);
 road.velocityY = 1;

 boy = createSprite(200,200,50,50);
 boy.addImage("boy",boyImg);
 boy.scale = 0.3;

 treesGroup= new Group();
 invisibleBlockGroup = new Group();

}

function draw() {
background(200);

if (gameState === "play") { 
 
 if(keyDown("right_arrow"))
 boy.x = boy.x + 3; 
 }

 if(keyDown("left_arrow")){
    boy.x = boy.x - 3; 
   }

   if(keyDown("space")){
    boy.velocityY=-10
   }
  
   boy.velocityY = boy.velocityY + 0.8
   
   if(boy.y > 400){
    boy.y = 300
  }
  spawnTrees();
    if(treesGroup.isTouching(boy)){
       boy.velocityY = 0; 
      }

    if(invisibleBlockGroup.isTouching(boy) || boy.y > 600){
     boy.destroy();
     gameState = "end" 
    
     drawSprites();
    }
   
    if (gameState === "end"){
        stroke("red");
         fill("red");
         textSize(40);
          text("Game Over", 300,300)
          } 
         }

function spawnTrees(){
if (frameCount % 240 === 0) {
  var tree = createSprite(200,10);
  var invisibleBlock = createSprite(200,15);
  invisibleBlock.width = tree.width;
  invisibleBlock.height = 2;
            
tree.addImage(treeImg);

tree.x = Math.round(random(120,400))
invisibleBlock.x = tree.x;
invisibleBlock.velocityY = 1;
tree.velocityY = 1;

boy.depth = tree.depth;
    boy.depth +=1;

    tree.lifetime = 800;
    invisibleBlock.lifetime = 800;

    treesGroup.add(tree);
    invisibleBlock.debug = true
    invisibleBlockGroup.add(invisibleBlock);
    }
    }





