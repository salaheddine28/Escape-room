let human;
let hImg;
let pImg;
let bImg;
let projectiles = [];
let projectiles2 = [];
let timer = 60


function preload(){
  hImg = loadImage('human.png');
  pImg = loadImage('projectile.png');
  bImg = loadImage('background.jpg');
}

function setup() {
  var div = createCanvas(900, 500);
  human = new Human();
  div.center();
}

function keyPressed()
{
  if (key == ' ') {
    human.jump();
  }
}



function draw() {
  
  if (random(1) < 0.0075)
    {
      projectiles.push(new Projectile());
    }
  
    if (random(1) < 0.0075)
    {
      projectiles2.push(new Projectile2());
    }
  
  
  background(bImg);
  
    for (let p of projectiles) {
    p.move();
    p.show();
    if (human.hits(p) && Human.y != height - this.r){
      console.log('game over');
      noLoop();
      }
  }
  
              for (let p of projectiles2) {
    p.move();
    p.show();
    if (human.hits(p) && Human.y != height - this.r){
      console.log('game over');
      noLoop();
      }
  }  
  
  
  
  human.show();
  human.move();
  
  textAlign(CENTER, CENTER);
  textSize(80);
  text(timer, width/2, height/2);
  
   if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    text("You Won!", width/2, height*0.7);
    text("-- --- .-. ... . / -.-. --- -.. .", width/2, height*0.1);
    noLoop();

  }
}