class Player{
    constructor(x, y){

        this.player = createSprite(x, y, 50, 50);
        this.weapon = createSprite(1840, 700, 50, 50);

        this.rightImg = loadImage("images/playerImages/player1 - Copy.png");
        this.leftImg = loadImage("images/playerImages/player1-left.png");
        this.spellbookImg = loadImage("images/spellbook.png");

        this.spellImg = loadAnimation("images/spell_01.png", "images/spell_02.png", "images/spell_03.png", "images/spell_04.png", 
        "images/spell_05.png", "images/spell_06.png", "images/spell_07.png", "images/spell_08.png", )

        this.player.addImage(this.rightImg);
        this.player.scale = 1;

        this.weapon.addAnimation("   ", this.spellbookImg);
        this.weapon.scale = 0.12;
        

        this.name;
        this.distance;
        this.health = 100;
        this.score;

        this.owernership = false;

    }

    move(){
        if(keyDown("up")){
            this.player.y = this.player.y-10;
        }
        if(keyDown("down")){
            this.player.y = this.player.y+10;
        }
        if(keyDown("left")){
            this.player.x = this.player.x-10;
            this.player.addImage(this.leftImg);
        }
        if(keyDown("right")){
            this.player.x = this.player.x+10;
            this.player.addImage(this.rightImg);
        }

    
  

            if(this.player.x < 360){
                camera.x = 360;
            }
            else if(this.player.x > 360 && this.player.x < 1550){
                camera.x = this.player.x;
            }
            if(this.player.x > 1550)
                camera.x = 1550;

            if(this.player.y < -400){
                camera.y = -400;
            }
            
            else if(this.player.y > -390 ){
                camera.y = this.player.y;
            }
        
    }

    pickWeapon(){
        
            this.owernership = true;
            this.weapon.x = this.player.x-width/2+50;
            this.weapon.y = this.player.y-height/2+100;
 
    }

    kill(){
        if(this.owernership === true){

            if(keyDown("space")){
            monsterGroup.destroyEach();
            score = score + 50;

            this.lightning = createSprite(this.player.x, this.player.y, 50, 50);
            this.spellImg.frameDelay = 1;
            this.lightning.addAnimation("light", this.spellImg);
            this.lightning.lifetime = 6;
            

        }
    }

}

die(){
    if(this.health < 1){
        gameState = 0;
    }
}
    

}