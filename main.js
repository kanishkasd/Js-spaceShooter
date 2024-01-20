
class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.posX = 0;

        this.enemy1 = new Enemy(this);
        this.enemy2 = new Enemy(this);
        this.enemy3 = new Enemy(this);
        this.enemy4 = new Enemy(this);
        this.enemy5 = new Enemy(this);

        this.start()

        window.addEventListener('resize', e => { // we use e keyword to get this object not the window
            this.resize(e.target.innerWidth, e.target.innerHeight)
        });
    }

    start() {
        this.resize(window.innerWidth, window.innerHeight);
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx.fillStyle = "green";
    }

    render() {
        this.enemy1.draw();
        this.enemy1.update();
        this.enemy2.draw();
        this.enemy2.update();
        this.enemy3.draw();
        this.enemy3.update();
        this.enemy4.draw();
        this.enemy4.update();
        this.enemy5.draw();
        this.enemy5.update();
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas, ctx);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render(ctx);
        requestAnimationFrame(animate) // call animate function recusively
    }
    requestAnimationFrame(animate)
})



