var edges
var bola
var bola2
var Alvo
var Alvo2
var Alvo3
var Alvo4
var Alvo5
var Alvo6
var Alvo7
var Alvo8
var Alvo9
var Alvo10
var Barreira
var Barreira2
var score = 0


function setup() {
  createCanvas(1000, 1000);
  canvas.style = 'position:absolute;top:0px;right:20%;button:0px;margin:auto;border:2px solid black';
  bola = createSprite(random(200, 800),600, 12, 12);
 // bola2 = createSprite(random(10, 339), random(10, 339), 12, 12);
  Jogador = createSprite(200, 700, 100, 15);
  Alvo = createSprite(230, 100, 15, 15);
  Alvo2 = createSprite(230, 120, 15, 15);
  Alvo3 = createSprite(2230, 140, 15, 15);
  Alvo4 = createSprite(230, 160, 15, 15);
  Alvo5 = createSprite(230, 180, 15, 15);
  Alvo6 = createSprite(250, 100, 15, 15);
  Alvo7 = createSprite(250, 120, 15, 15);
  Alvo8 = createSprite(250, 140, 15, 15);
  Alvo9 = createSprite(250, 160, 15, 15);
  Alvo10 = createSprite(250, 180, 15, 15);
  Barreira = createSprite(1000, 500, 600, 10);
  Barreira2 = createSprite(135, 500, 320, 10);
  //bola2.velocityX = -6;
 // bola2.velocityY = -5;
  for (var Alvo11=10;Alvo11<1000;Alvo11=Alvo11+20) {

  var Alvo12 = createSprite(Alvo11, 200, 15, 15);

  Alvo12.shapeColor = 'green'

}

}

function draw() {
  background("black");
  fill('white')
  textSize(30)
  text('score:  ' + score, 240, 800)
  if (keyDown('space')) {

    bola.velocityX = 8;
    bola.velocityY = 8;

  }
  bola.shapeColor = 'white';
  //  bola2.shapeColor = 'white';
  Jogador.shapeColor = 'white';
  Alvo.shapeColor = 'green';
  Alvo2.shapeColor = 'green';
  Alvo3.shapeColor = 'green';
  Alvo4.shapeColor = 'green';
  Alvo5.shapeColor = 'green';
  Alvo6.shapeColor = 'green';
  Alvo7.shapeColor = 'green';
  Alvo8.shapeColor = 'green';
  Alvo9.shapeColor = 'green';
  Alvo10.shapeColor = 'green';
  
  edges = createEdgeSprites();
  //bola.bounceOff(bola2);
  bola.bounceOff(edges);
 // bola2.bounceOff(edges);
  //bola2.bounceOff(bola);
  Jogador.x = World.mouseX;
  bola.bounceOff(Jogador);
  //bola2.bounceOff(Jogador);
  Jogador.bounceOff(edges);
  bola.bounceOff(Barreira);
  //bola2.bounceOff(Barreira);
  bola.bounceOff(Barreira2);
 // bola2.bounceOff(Barreira2);
  
 
 if (bola.isTouching(Alvo) /*bola2.isTouching(Alvo))*/) {
    score = score + 1
    Alvo.destroy();
    bola.bounceOff(Alvo);
   // bola2.bounceOff(Alvo);
  }
  if (bola.isTouching(Alvo2) /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo2.destroy();
    bola.bounceOff(Alvo2);
   // bola2.bounceOff(Alvo2);
  }
  if (bola.isTouching(Alvo3)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo3.destroy();
    bola.bounceOff(Alvo3);
   // bola2.bounceOff(Alvo3);
  }
  if (bola.isTouching(Alvo4)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo4.destroy();
    bola.bounceOff(Alvo4);
   // bola2.bounceOff(Alvo4);
  }
  if (bola.isTouching(Alvo5)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo5.destroy();
    bola.bounceOff(Alvo5);
    //bola2.bounceOff(Alvo5);
  }
  if (bola.isTouching(Alvo6)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo6.destroy();
    bola.bounceOff(Alvo6);
    //bola2.bounceOff(Alvo6);
  }
  if (bola.isTouching(Alvo7)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo7.destroy();
    bola.bounceOff(Alvo7);
   // bola2.bounceOff(Alvo7);
  }
  if (bola.isTouching(Alvo8)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo8.destroy();
    bola.bounceOff(Alvo8);
   // bola2.bounceOff(Alvo8);
  }
  if (bola.isTouching(Alvo9)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo9.destroy();
    bola.bounceOff(Alvo9);
   // bola2.bounceOff(Alvo9);
  }
  if (bola.isTouching(Alvo10)  /*bola2.isTouching(Alvo2)*/) {
    score = score + 1
    Alvo10.destroy();
    bola.bounceOff(Alvo10);
    //bola2.bounceOff(Alvo10);
  }
  drawSprites();
}

