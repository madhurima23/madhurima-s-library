var fixedRect, movingRect,a,b,c,d,e;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500,500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  a = createSprite(600,300,40,20);
  a.shapeColor="green";
  a.velocityX=-4;
  a.velocityY=-2;
b = createSprite (400,400,60,10);
b.shapeColor="green";
c = createSprite(500,200,40,50);
c.shapeColor="green";
d = createSprite(600,350,40,20);
d.shapeColor="green";
d.velocityY=4;
d.velocityX=7;
e= createSprite(750,140,37,23);
e.shapeColor="green";
}

function draw() {
  background(0,0,0);  


  drawSprites();
  if (istouching(b,e)){
    b.shapeColor="red";
   e.shapeColor="red";
  }
  else{
    b.shapeColor="green";
    e.shapeColor="green";
  }
  bounce(a,d);
  e.x=mouseX;
 e.y=mouseY; 
}


