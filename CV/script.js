const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numberOfFlakes = 200;
let flakes = [];

class SnowFlake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 + 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }

        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
    }
}

function createFlakes() {
    for (let i = 0; i < numberOfFlakes; i++) {
        flakes.push(new SnowFlake());
    }
}

function animateFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flakes.forEach(flake => {
        flake.update();
        flake.draw();
    });

    requestAnimationFrame(animateFlakes);
}

createFlakes();
animateFlakes();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

console.log("JavaScript is linked correctly!");
