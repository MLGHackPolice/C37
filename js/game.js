class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
        gameState = data.val(); 
        });
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if (gameState === 0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value")
            if (playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();

        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();
        textSize(30)
        text("Game Start" , 120, 100)
        Player.getplayerinfo();
        if (allplayers !== undefined){
            var index = 0;
            var x = 100
            var y;
            for (var plr in allplayers){
                index += 1
                x += 200
                y = displayHeight-allplayers[plr].distance

                cars[index-1].x = x
                cars[index-1].y = y

                if (index === player.playerIndex){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }
        }
        if (keyIsDown(UP_ARROW) && player.playerIndex !== null){
            player.distance += 50;
            player.update();
        }
        drawSprites()
    }
}