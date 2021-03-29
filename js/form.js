class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(displayWidth/2-50,0);

        
        

        this.input.position(displayWidth/2-50,displayHeight/2-40);
        this.button.position(displayWidth/2+50,displayHeight/2);

        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.playerIndex = playerCount
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-50, displayHeight/2-40);
        });
    }
}