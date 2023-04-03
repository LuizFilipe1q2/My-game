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


function setup() {
  createCanvas(500, 2000);
  canvas.style = 'position:absolute;top:0px;right:40%;button:0px;margin:auto;border:2px solid black';
   bola = createSprite(random(400, 221),random(400, 400),12,12);
   bola2 = createSprite(random(10, 339),random(10, 339),12,12);
   Jogador = createSprite(200,400,100,15);
   Alvo = createSprite(200,100,15,15);
   Alvo2 = createSprite(200,120,15,15);
   Alvo3 = createSprite(200,140,15,15);
   Alvo4 = createSprite(200,160,15,15);
   Alvo5 = createSprite(200,180,15,15);
   Alvo6 = createSprite(220,100,15,15);
   Alvo7 = createSprite(220,120,15,15);
   Alvo8 = createSprite(220,140,15,15);
   Alvo9 = createSprite(220,160,15,15);
   Alvo10 = createSprite(220,180,15,15);
   Barreira = createSprite(400,220,290,10);
   Barreira2 = createSprite(1,220,290,10);
  bola.velocityX = -6 ;
  bola.velocityY = -5;
  bola2.velocityX = -6 ;
  bola2.velocityY = -5 ;
}

function draw() {
  background("black");
 bola.shapeColor = 'white';
  bola2.shapeColor = 'white';
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
 bola.bounceOff(bola2) ;
  bola.bounceOff(edges);
  bola2.bounceOff(edges);
  bola2.bounceOff(bola) ;
  Jogador.x = World.mouseX ;
  bola.bounceOff(Jogador);
  bola2.bounceOff(Jogador);
    Jogador.bounceOff(edges);
     bola.bounceOff(Barreira);
      bola2.bounceOff(Barreira);
       bola.bounceOff(Barreira2);
        bola2.bounceOff(Barreira2);
    if (bola.isTouching(Alvo)||bola2.isTouching(Alvo)){
    Alvo.destroy();
     bola.bounceOff(Alvo);
     bola2.bounceOff(Alvo);
    }
     if (bola.isTouching(Alvo2)||bola2.isTouching(Alvo2)){
    Alvo2.destroy();
     bola.bounceOff(Alvo2);
     bola2.bounceOff(Alvo2);
     }
     if (bola.isTouching(Alvo3)||bola2.isTouching(Alvo3)){
    Alvo3.destroy();
     bola.bounceOff(Alvo3);
     bola2.bounceOff(Alvo3);
    }
     if (bola.isTouching(Alvo4)||bola2.isTouching(Alvo4)){
    Alvo4.destroy();
     bola.bounceOff(Alvo4);
     bola2.bounceOff(Alvo4);
    }
     if (bola.isTouching(Alvo5)||bola2.isTouching(Alvo5)){
    Alvo5.destroy();
     bola.bounceOff(Alvo5);
     bola2.bounceOff(Alvo5);
    }
     if (bola.isTouching(Alvo6)||bola2.isTouching(Alvo6)){
    Alvo6.destroy();
     bola.bounceOff(Alvo6);
     bola2.bounceOff(Alvo6);
    }
     if (bola.isTouching(Alvo7)||bola2.isTouching(Alvo7)){
    Alvo7.destroy();
     bola.bounceOff(Alvo7);
     bola2.bounceOff(Alvo7);
    }
     if (bola.isTouching(Alvo8)||bola2.isTouching(Alvo8)){
    Alvo8.destroy();
     bola.bounceOff(Alvo8);
     bola2.bounceOff(Alvo8);
    }
     if (bola.isTouching(Alvo9)||bola2.isTouching(Alvo9)){
    Alvo9.destroy();
     bola.bounceOff(Alvo9);
     bola2.bounceOff(Alvo9);
    }
     if (bola.isTouching(Alvo10)||bola2.isTouching(Alvo10)){
    Alvo10.destroy();
     bola.bounceOff(Alvo10);
     bola2.bounceOff(Alvo10);
    }
    
  drawSprites();
 }

