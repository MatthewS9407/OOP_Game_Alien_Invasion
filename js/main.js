class Game {
    constructor(){
        this.player = null;
        this.aliens = [];
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();

        const createAliens = setInterval(() => {
            const newAlien = new Alien();
            this.aliens.push(newAlien);
        }, 1500)

        setInterval(() => {
            this.aliens.forEach((alienInstance) => {
                alienInstance.moveDown();
                this.detectCollision(alienInstance); 
                this.alienOutside(alienInstance); 
            });
        }, 50);

        setTimeout ( () => {
            clearInterval(createAliens);
        }, 60000)

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
    detectCollision(alienInstance){
        if (
            this.player.positionX < alienInstance.positionX + alienInstance.width &&
            this.player.positionX + this.player.width > alienInstance.positionX &&
            this.player.positionY < alienInstance.positionY + alienInstance.height &&
            this.player.height + this.player.positionY > alienInstance.positionY
        ) {
            console.log("game over....")
            location.href = 'gameover.html';
        }
    }
    alienOutside(alienInstance){
        if(alienInstance.positionY < 0){
            alienInstance.domElement.remove();
            this.aliens.shift();
        }
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
            this.positionX = this.positionX + 2;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
}

class Alien {
    constructor(){
        this.width = 5;
        this.height = 2.5;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 90;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement('div');
        this.domElement.className = 'alien';
        this.domElement.style.width = this.width + 'vw';
        this.domElement.style.height = this.height + 'vh';
        this.domElement.style.bottom = this.positionY + 'vh';
        this.domElement.style.left = this.positionX + 'vw';

        const boardElm = document.getElementById('board');
        boardElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + 'vh';
    }
}


const game = new Game();
game.start();