class Monster{
    constructor(){

        this.image = loadAnimation("images/a.png", "images/b.png", "images/d.png")
        this.image2 = loadAnimation("images/flame_01.png", "images/flame_02.png", "images/flame_03.png", 
        "images/flame_04.png", "images/flame_05.png", )

        

          if(frameCount % 2 === 0){
            this.monster = createSprite(Math.round(random(-150, 2000)), Math.round(random(-150, 7100)), 50, 50);


            this.monster.velocityX = Math.round(random(-15, 15));
            this.monster.velocityY = Math.round(random(-10, 10));

            var rand = Math.round(random(1,2))
            if(rand === 1){
            this.monster.addAnimation("j", this.image);
            this.monster.scale = 0.12;
            
            }
            if(rand === 2){
              this.monster.addAnimation("j", this.image2);
              this.monster.scale = 0.09;
              
              }
              monsterGroup.add(this.monster);

          }
        }

    killPlayer(){
        if(player.player.isTouching(monsterGroup)){
            player.health = player.health-0.5;
        }
    }
}

                             