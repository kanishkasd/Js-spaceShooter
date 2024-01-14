
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;  // ensure that width & height of the canvas same as canvas
        this.posX = 50;

        window.addEventListener('resize', e => { // e gives us the event of the current window
            this.resize(e.target.innerWidth, e.target.innerHeight)
        });
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
    }

    render(context) {
       this.posX++; 
        context.fillRect(this.posX, 100, 50, 150);
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'green'

    const game = new Game(canvas);

    function animate(){
        ctx.clearRect(0, 0 , canvas.width, canvas.height)
        game.render(ctx)
        requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

})
