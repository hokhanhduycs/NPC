/** @type {HTMLCanvasElement}  */ 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 550;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = 900;
const enemiesArray = [];
// enemy1 = {
//     x: 0,
//     y: 0,
//     width: 200,
//     height: 200,
// }
// const enemiesImage = new Image();
// enemiesImage.src = 'npc.png';
let gameFrame = 0;
// this.flapSpeed = Math.floor(Math.random() * 3 + 1);

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'npc.png';
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 413.5;
        this.spriteHeight = 599;
        this.width = this.spriteWidth / 9;
        this.height = this.spriteHeight/ 9;
        this.frame = 2;
    }
    update(){
        this.x += Math.random() * 1 - .5 ;
        this.y += Math.random() * 3 - 1.5;
        // animate sprites
        // if(gameFrame % 2 === 0){
            this.frame > 28 ? this.frame = 0 : this.frame++;
        // }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
}
// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();