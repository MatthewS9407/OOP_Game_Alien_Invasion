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

    }
}


const game = new Game();
game.start();