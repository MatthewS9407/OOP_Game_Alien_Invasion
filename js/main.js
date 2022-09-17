class Game {
    constructor(){
        this.player = null;
        this.obstacles = [];
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();


    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}

class Player {
    constructor (){
        this.width = 10;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 5;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement('div');
        this.domElement.id = 'player';
        this.domElement.style.width = this.width + 'vw';
        this.domElement.style.height = this.height + 'vh';
        this.domElement.style.bottom = this.positionY + 'vh';
        this.domElement.style.left = this.positionX + 'vw';

        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveLeft(){
        if (this.positionX > 0) {
            this.positionX = this.positionX - 2;
            this.domElement.style.left = this.positionX + 'vw';
        }
    }
    moveRight(){
        if (this.positionX < 89.5) {
            this.positionX = this.positionX - 2;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
}


const game = new Game();
game.start();