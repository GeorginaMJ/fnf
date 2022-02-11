var flecha1;
var flecha2;
var flecha3;
var flecha4;
var musica;
var fondo;
var Flecha1;
var Flecha2;
var Flecha3;
var Flecha4;
var aumento="wait";
var score=0;
var color="white";

function preload(){
 Flecha1=loadImage("FlechaD.png");
 Flecha2=loadImage("FlechaI.png");
 Flecha3=loadImage("FlechaAR.png");
 Flecha4=loadImage("FlechaAB.png");
 musica=loadSound("VsAnime.mp3");
  fondo=loadImage("fondoC.jpg");

}

function setup(){
  createCanvas(displayWidth,displayHeight)
  musica.play()
  //console.log(displayHeight);
 
 
  
}
function draw(){
  background(fondo);
  //fill(color);

 /*for (reloj=1;reloj<=18;reloj++){
  flechasD();
  flechasI();
  flechasA();
  flechasB();
}


 if(reloj==18){
 aumento=50
 flechasD(aumento);
 flechasI(aumento);
 flechasA(aumento);
 flechasB(aumento);
 */
  flechasD();
  flechasI();
  flechasA();
  flechasB();
 fill(color);
 textSize(20);
 text("score "+score,displayWidth-100 ,displayHeight-displayHeight+20);

  drawSprites();
}

function flechasD ()
{
  if (frameCount%60==0){
    
  flecha1 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha1.addImage(Flecha1) ;
   flecha1.velocityY=-18;
   for(var a=0;a<=5;a++){

   }
  flecha1.x=Math.round(random(displayWidth-displayWidth+100,displayWidth-966));
  flecha1.y=Math.round(random(displayHeight+100,displayHeight -100));
  flecha1.scale=0.5;
  flecha1.lifetime=displayHeight/flecha1.velocityY;
  aumento="derecha";
  if (aumento=="derecha"&&keyDown("right")){
    score+=1;
    color="green";
      }
   // gruponbs.add(Nube);

  }
}


function flechasA (aumento)
{
  if (frameCount%180==0){
    
  flecha2 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha2.addImage(Flecha2) ;
   flecha2.velocityY=-18;
    for(var a=0;a<=5;a++){

    }
  flecha2.x=Math.round(random(displayWidth-displayWidth+400,displayWidth-500));
  flecha2.y=Math.round(random(displayHeight+100,displayHeight -100));
  flecha2.scale=0.5;
  flecha2.lifetime=displayHeight/flecha2.velocityY;
  if (keyDown("up")){
    score+=1;
    color="purple";
      }
   // gruponbs.add(Nube);

  }
}


function flechasB (aumento)
{
  if (frameCount%360==0){
    
  flecha3 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha3.addImage(Flecha3) ;
  console.log(displayWidth)
    flecha3.velocityY=-18;
    for(var a=0;a<=5;a++){

    }
  flecha3.x=Math.round(random(displayWidth-displayWidth+300,displayWidth-266));
   flecha3.y=Math.round(random(displayHeight+100,displayHeight -100));
  flecha3.scale=0.5;
  flecha3.lifetime=displayHeight/flecha3.velocityY;
   // gruponbs.add(Nube);
   if (keyDown("down")){
    score+=1;
    color="blue";
      }
  }
}

function flechasI (aumento)
{
  if (frameCount%100==0){
    
  flecha4 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha4.addImage(Flecha4) ;
  
    flecha4.velocityY=-18;
    for(var a=0;a<=5;a++){

    }
  flecha4.x=Math.round(random(displayWidth-displayWidth+1000,displayWidth-50));
  flecha4.y=Math.round(random(displayHeight+100,displayHeight -100));
  flecha4.scale=0.5;
  flecha4.lifetime=displayHeight/flecha4.velocityY;
  if (keyDown("left")){
    score+=1;
    color="red";
      }
   // gruponbs.add(Nube);

  }
}



