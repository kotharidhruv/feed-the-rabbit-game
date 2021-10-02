var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImage
var leaf
var leafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  

  var select_sprites = Math.round(random(1,2));
  console.log(select_sprites)
  if (frameCount%80 == 0) {
    if (select_sprites == 1) {
      apple = createSprite (200,40,10,10);
      apple.x = Math.round(random(50,300))
    apple.addImage(appleImage);
    apple.velocityY = 5
    apple.lifetime = 100;
      apple.scale = 0.08
    }
    
    if (select_sprites == 2){
      leaf = createSprite(random(50,350),40,10,10);
      leaf.addImage(leafImage);
      leaf.velocityY = 5
      leaf.lifetime = 100;
      leaf.scale = 0.08
    }

  }
  drawSprites();
}

function createApples() {
  
}

function createLeafs() {

}