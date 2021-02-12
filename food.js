class Food{
    constructor(){

        this.foodImage = loadImage("images/bread.png");
        this.waterImage = loadImage("images/blueflame_05.png");
        
        this.food1 = createSprite(1350, -420, 20, 20);
        this.food1.addImage(this.foodImage);
        this.food1.scale = 0.1;

        this.food2 = createSprite(550, 1130, 20, 20);
        this.food2.addImage(this.foodImage);
        this.food2.scale = 0.1;

        this.food3 = createSprite(1330, 3510, 20, 20);
        this.food3.addImage(this.foodImage);
        this.food3.scale = 0.1;

        this.food4 = createSprite(70, 1800, 20, 20);
        this.food4.addImage(this.foodImage);
        this.food4.scale = 0.1;

        this.food5 = createSprite(1680, 5615, 20, 20);
        this.food5.addImage(this.foodImage);
        this.food5.scale = 0.1;

        this.food6 = createSprite(295, 5600, 20, 20);
        this.food6.addImage(this.foodImage);
        this.food6.scale = 0.1;

        this.food7 = createSprite(115, 6905, 20, 20);
        this.food7.addImage(this.foodImage);
        this.food7.scale = 0.1;

        this.food8 = createSprite(1825, 6905, 20, 20);
        this.food8.addImage(this.foodImage);
        this.food8.scale = 0.1;
    }

    createWater(){
        if(frameCount % 300 === 0){
            
            this.water = createSprite(Math.round(random(0, 1900)), Math.round(random(-100, 7400)), 20, 20);
            this.water.addImage(this.waterImage);
            this.water.scale = 0.2;
            waterGroup.add(this.water);
            
        }

    }


    increaseHealth(){
        if(player.player.isTouching(waterGroup)){
            waterGroup.destroyEach();
            player.health = player.health + 2;
        }

        if(player.player.isTouching(this.food1)){
            this.food1.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food2)){
            this.food2.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food3)){
            this.food3.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food4)){
            this.food4.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food5)){
            this.food5.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food6)){
            this.food6.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food7)){
            this.food7.destroy();
            player.health = player.health + 20;
        }
        if(player.player.isTouching(this.food8)){
            this.food8.destroy();
            player.health = player.health + 20;
        }

    }


}