var bg1, bg2, bg3;
var player;
var layout, monster, monsterGroup;
var food, waterGroup, foodGroup;
var player1, player2, player3;
var storyBg;
var trophy, trophyImage;

var gameState = 1;
var score = 0;

function preload(){

  bg1 = loadImage("images/Spawn2.jpg");
  bg2 = loadImage("images/map2.jpg");
  bg3 = loadImage("images/map1.png");

  storyBg = loadImage("images/storyPage.jpg");

  
  trophyImage = loadImage("images/trophy.png");
  


}


function setup() {
  createCanvas(1300, 700);

  trophy = createSprite(970, 6323, 100, 100);
  trophy.addImage(trophyImage);
  trophy.scale = 0.2;
  
  player = new Player(1000, 350);
    //900, 6000)
    //1000, 350);

  layout = new Layout();

  layout.layout1();   

  food = new Food();

  monsterGroup = new Group();
  waterGroup = new Group();
  foodGroup = new Group();
}


function draw() {
   background(0); 

   console.log(player.player.x);
   console.log(player.player.y);

  //6322, 933

  if(gameState === 1){
    layout.bg();
    player.move();

    food.createWater();

  monster = new Monster();
  
  layout.layoutBounceOff();
  layout.layoutBounceOff();

  monster.killPlayer();

  drawSprites();
  player.die();

  food.increaseHealth();
  textSize(20);
  fill(255)

  



  //giving player ownership of weapon when mouse clicks on it
  if(mousePressedOver(player.weapon)){
    player.ownership = true
  }

  if(player.ownership === true){
    
    player.pickWeapon();

    player.kill();
  }

  textSize(20);
  fill(255);
  strokeWeight(5);
  text ("SCORE : "+score, camera.x-width/2+20, camera.y-height/2+20);
  text("HEALTH : "+player.health, camera.x-width/2+20, camera.y-height/2+50);

    if(player.health<0){
      gameState = 0;
    }

  }

  if(gameState === 0){
    text ("GAME OVER!", camera.x, camera.y);
    text ("SCORE : "+score, camera.x, camera.y+20);

    
  }


  if(gameState === 2){
    story();
  }

  
  
}

function story(){
  image(storyBg, -800, -100, 3000, 6000);
  
  textSize(1000);

  //text("Story Name", 1500, -80);
  //wizard tryna escape and survive through this maze
}

