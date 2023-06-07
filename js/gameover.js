export class Gameover {
    constructor(game) {
        this.game = game
        this.x = this.game.width
        this.y = 0
        this.speed = 100
        this.alpha = 0
        this.fontFamilly = 'Pixel'
        this.reset = document.getElementById('reset-icon')
    }
    update() {
        this.x -= this.speed
        if (this.x <= 0) this.x = 0
        this.alpha += 0.005
    }
    draw(context) {
        context.fillRect(this.x, this.y, this.game.width, this.game.height)
        context.font = 50 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(255,0,0,${this.alpha}`
        context.textAlign = 'center'
        context.fillText('GAME OVER!', this.game.width / 2, this.game.height / 2 - 50)
        context.font = 30 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(255,255,255,${this.alpha}`
        context.fillText(this.game.scoreText, this.game.width / 2, this.game.height / 2 + 50)
        context.font = 20 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(200,200,200,${this.alpha}`
        context.fillText('PRESS ENTER TO RESTART', this.game.width / 2, this.game.height / 2 - 10)
        context.textAlign = 'left'
    }
}