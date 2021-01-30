var maze

function preload() {
img=loadImage("preview_idle.gif")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  soldier1 = createSprite(390,40,20,20)
  soldier1.addImage(img)
  soldier1.scale=0.35
  soldier2 = createSprite(1156,40,20,20)
  soldier2.addImage(img)
  soldier2.scale=0.35
  createSprite(368, 361, 200, 5);
  createSprite(390,160,5, 100)
  createSprite(390,312,5, 100)
  createSprite(590,312,5, 100)
  createSprite(590,160,5, 100)
  createSprite(368, 110, 200, 5);
  createSprite(630, 361, 200, 5);
  createSprite(630, 110, 200, 5);
  createSprite(536, 25, 5, 100);
  createSprite(900, 110, 200, 5);
  createSprite(900, 361, 200, 5);
  createSprite(1170, 110, 200, 5);
  createSprite(1170, 361, 200, 5);
  createSprite(930,160,5, 100);
  createSprite(930,312,5, 100);
  createSprite(1150,160,5, 100);
  createSprite(1150,312,5, 100);
  createSprite(150,20,5, 100);
  createSprite(1000, 25, 5, 100);
  createSprite(1400, 25, 5, 100);
  createSprite(147, 440, 5, 560);
  createSprite(1400, 400, 5, 500);
  createSprite(30, 213, 70, 5);
  createSprite(114, 280, 70, 5);
  createSprite(30, 340, 70, 5);
  createSprite(114, 400, 70, 5);
  createSprite(30, 460, 70, 5);
  createSprite(114, 520, 70, 5);
  createSprite(30, 580, 70, 5);
  createSprite(147, 650, 5, 120);
  createSprite(1510, 213, 70, 5);
  createSprite(1435, 280, 70, 5);
  createSprite(1510, 340, 70, 5);
  createSprite(1435, 400, 70, 5);
  createSprite(1510, 460, 70, 5);
  createSprite(1435, 520, 70, 5);
  createSprite(1510, 580, 70, 5);
  createSprite(1400, 690, 5, 95);
  createSprite(760, 361, 100,5)
  createSprite(420, 480, 550,5)
  createSprite(1110, 480, 580,5)
  createSprite(430,415,5,30)
  createSprite(500,415,5,30)
  createSprite(570,415,5,30)
  createSprite(640,415,5,30)
  createSprite(870,415,5,30)
  createSprite(940,415,5,30)
  createSprite(1010,415,5,30)
  createSprite(1080,415,5,30)
  createSprite(765, 500,5, 40)
  createSprite(765, 600,5, 40)
  createSprite(420, 690, 550,5)
  createSprite(1110, 690, 580,5)
  createSprite(765, 580, 1000,5)

  //createSprite()
  
}

function draw() {
  background(0);  
  console.log("mouseX="+mouseX)
  console.log("mouseY="+mouseY)
  console.log("width/2="+width/2)
  console.log("height/2="+height/2)
  drawSprites();

}