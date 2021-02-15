var rockB, paperB, scissorB;
var rockBimg, paperBimg, scissorBimg;

var Rock, Paper, Scissor;
var RockImg, PaperImg, ScissorImg;

var rockA, paperA, scissorA;
var rockAimg, paperAimg, scissorAimg;

var font;

var rockCount, paperCount, scissorCount;

var compRockimg, compPaperimg, compScissorimg;
//var compRock, compPaper, compScissor;
var computer; 
var rand = 0;
var gameState = "play";
/*gameState animate for animation, play for chances, break for time interval between two chances, 
end for completion*/
var chances, wins = 0;
var compWins = 0;

function preload(){
  //font = loadFont("font.otf");

  //buttons
  rockBimg = loadImage("Images/rock_button.jpg");
  paperBimg = loadImage("Images/paper_button.jpg");
  scissorBimg = loadImage("Images/scissor_button.jpg");

  //animations
  rockAimg = loadImage("Images/rock_animation.jpg");
  paperAimg  = loadImage("Images/paper_animation.jpg");
  scissorAimg  = loadImage("Images/scissor_animation.jpg");

  //originals
  RockImg = loadImage("Images/rock.jpg");
  PaperImg = loadImage("Images/paper.jpg");
  ScissorImg = loadImage("Images/scissor.jpg");

  //compOriginals
  compRockImg = loadImage("Images/rock.jpg");
  compPaperImg = loadImage("Images/paper.jpg");
  ScissorImg = loadImage("Images/scissor.jpg");



}
function setup() {
  createCanvas(1400,600);
  //createSprite(400, 200, 50, 50);

  computer = createSprite(700, -300);

  if(gameState == "play"){
  rockB = createSprite(200, 350);
  rockB.addImage(rockBimg);
  rockB.scale = 0.3;

  paperB = createSprite(200, 450);
  paperB.addImage(paperBimg);
  paperB.scale = 0.3;

  scissorB = createSprite(200, 550);
  scissorB.addImage(scissorBimg);
  scissorB.scale = 0.3;
  
  Rock = createSprite(700, 900);
  Rock.addImage(RockImg);
  Rock.scale = 0.4;

  Paper = createSprite(700, 900);
  Paper.addImage(PaperImg);
  Paper.scale = 0.4;

  Scissor = createSprite(700, 900);
  Scissor.addImage(ScissorImg);
  Scissor.scale = 0.4;

  //animations
    /*rockA = createSprite(400, 650);
    rockA.addImage(rockAimg);
    rockA.velocityY = -7;
    rockA.scale = 0.4;

    scissorA = createSprite(1000, 650);
    scissorA.addImage(scissorAimg);
    scissorA.velocityY = -7;
    scissorA.scale = 0.2;

    paperA = createSprite(700, 650);
    paperA.addImage(paperAimg);
    paperA.velocityY = -7;
    paperA.scale = 0.4*/
  }
}

function draw() {
  background("black");  

//animation
/*if(gameState == "animate"){

    background("black");
    

  
if(rockA.y < 300 && paperA.y < 300 && scissorA.y < 300){
  rockA.velocityY = 0;
  scissorA.velocityY = 0;
  paperA.velocityY = 0;
}
}*/
  
/*if(gameState == "animate" && paperA.velocityY == 0 && scissorA.velocityY == 0 && rockA.velocityY == 0){
  gameState = "play";
}*/

 //rock
 if(gameState == "play"){
   background("black");
  if(mousePressedOver(rockB)){
    //for(var i = 1; i<=1000; i++){

    //}
    Rock.velocityY = -7;
    computerMove();
  }

  
  //paper
  if(mousePressedOver(paperB)){
    Paper.velocityY = -7;
    computerMove();

  }

  //scissor
  if(mousePressedOver(scissorB)){
    Scissor.velocityY = -7;
    computerMove();

  }
  if(computer.y>100){
    computer.velocityY = 0;
  }
  if(Rock.y < 450 || Paper.y < 450 || Scissor.y <450){
    Rock.velocityY = 0;
    Paper.velocityY = 0;
    Scissor.velocityY = 0;
  }
 }

 
  drawSprites();
  for(var i=0; i<=1400; i=i+20){
    stroke("white");
    line(i, 300, i+10, 300);
  }
  //playerWins
  if(mousePressedOver(rockB) && rand == 2){
     wins++;
  }
  if(mousePressedOver(rockB) && rand == 3){
    compWins++;
  }

  if(mousePressedOver(paperB) && rand == 1){
    wins++;
  }
  if(mousePressedOver(paperB) && rand == 2){
    compWins++;
  }

  if(mousePressedOver(scissorB) && rand == 3){
    wins++;
  }
  if(mousePressedOver(scissorB) && rand == 1){
    compWins++;
  }
  textSize(30);
 text("Wins : "+wins, 1250, 350);
 text("Computer Wins : "+compWins, 1100, 250);
}

function computerMove(){
 rand = Math.round(random(1,3));
 computer.velocityY = 7;
 
 switch(rand){
   case 1:
     computer.addImage(RockImg);
     break;

  case 2 : 
    computer.addImage(ScissorImg);
    break;

  case 3:
      computer.addImage(PaperImg);
    break;

  default:
    break;
 }
 computer.scale = 0.4;
 console.log(rand);
 
 
}