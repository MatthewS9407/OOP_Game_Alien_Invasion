class Game {
    constructor(){
        this.player = null;
        this.obstacles = [];
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();

        setInterval(() => {

        })
    }
}

class Player {
    constructor (){
        this.width = 15;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        
    }
    moveLeft(){

    }
}
