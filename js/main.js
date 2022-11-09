class Game {
    constructor(){
        this.player = null;
        this.lives = 3;
        this.score = 0;
        this.aliens = [];
        this.bullets = [];
    }

    start(){
        this.player = new Player();
        this.attachEventListeners();
        
        

       document.addEventListener("keypress", (event) => {
           if(event.key === "Enter"){
               document.getElementById("intro").remove();

               const spawnAliens = setInterval(() => {
                   const newAlien = new Alien();
                   this.aliens.push(newAlien);
               }, 2000)             

               setInterval(() => {
                   this.aliens.forEach((alienInstance) => {
                       alienInstance.moveDown();
                       this.detectCollisionPlayerAlien(alienInstance);
                       this.detectCollisionBulletAlien(alienInstance); 
                       this.alienOutside(alienInstance); 
                       setTimeout ( () => {
                        alienInstance.domElement.remove();
                    }, 4100)
                   });
                   this.bullets.forEach((bulletInstance) => {
                    bulletInstance.shoot();
                    this.bulletOutside(bulletInstance);
                    setTimeout ( () => {
                     bulletInstance.domElement.remove();
                 }, 4100)
                });
               }, 50);       
           }
       })        
    }

    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
        document.addEventListener("keypress", (event) => {
            if(event.key === " ") {
                const newBullet = this.player.fire();
                this.bullets.push(newBullet);
            }
        })
        
    }
    
    detectCollisionPlayerAlien(alienInstance){
        if (
            this.player.positionX < alienInstance.positionX + alienInstance.width &&
            this.player.positionX + this.player.width > alienInstance.positionX &&
            this.player.positionY < alienInstance.positionY + alienInstance.height &&
            this.player.height + this.player.positionY > alienInstance.positionY
        ) {
            alienInstance.domElement.remove();
            this.lives - 1;
            this.gameOver();
            return document.getElementById("lives").innerHTML = this.lives;
            
        }
    }
    
    detectCollisionBulletAlien(alienInstance){
        this.bullets.forEach((bulletInstance) => {
        if (bulletInstance.positionX < alienInstance.positionX + alienInstance.width &&
            bulletInstance.positionX + bulletInstance.width > alienInstance.positionX &&
            bulletInstance.positionY < alienInstance.positionY + alienInstance.height &&
            bulletInstance.height + bulletInstance.positionY > alienInstance.positionY)
            {
            this.bullets.shift();
            this.aliens.shift();
            alienInstance.domElement.remove();
            bulletInstance.domElement.remove();
            this.score++ ;
            return document.getElementById("score").innerHTML = this.score;
            
        }
    })
    }

    alienOutside(alienInstance){
        if(alienInstance.positionY < 0){
            
            this.aliens.shift();
            alienInstance.domElement.remove();
            this.lives--;
            this.gameOver();
            return document.getElementById("lives").innerHTML = this.lives;
        }
        
    }


    bulletOutside(bulletInstance){
        if(bulletInstance.positionY >= 100){
            this.bullets.shift();
            bulletInstance.domElement.remove();
        }
    }
    gameOver(){
        if(this.lives === 0 || this.lives < 0){
        location.href = 'gameover.html';
        }
    }
}

class Player {
    constructor (){
        this.width = 8;
        this.height = 14;
        this.positionX = 50;
        this.positionY = 0;
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
            this.positionX = this.positionX - 3;
            this.domElement.style.left = this.positionX + 'vw';
        }
    }
    moveRight(){
        if (this.positionX < 92) {
            this.positionX = this.positionX + 3;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
    fire(){
        const newBullet = new Bullet(this.positionX)
        return newBullet
    }
  }
  
  class Alien {
    constructor(){
        this.width = 4;
        this.height = 6.5;
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
  
  class Bullet {
    constructor(position){
        this.width = 0.5;
        this.height = 2.5;
        this.positionX = position + 3.7;
        this.positionY = 14;
        this.domElement = null;
  
        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement('div');
        this.domElement.className = 'bullet';
        this.domElement.style.width = this.width + 'vw';
        this.domElement.style.height = this.height + 'vh';
        this.domElement.style.bottom = this.positionY + 'vh';
        this.domElement.style.left = this.positionX + 'vw';
  
        const boardElm = document.getElementById('board');
        boardElm.appendChild(this.domElement);
    }
    shoot(){
        this.positionY = this.positionY + 2;
        this.domElement.style.bottom = this.positionY + 'vh';
    }

  }
  const game = new Game();
  
  game.start();