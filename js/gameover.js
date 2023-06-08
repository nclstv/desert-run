export class Gameover {
    constructor(game) {
        this.game = game
        this.x = this.game.width
        this.y = 0
        this.speed = 100
        this.alpha = 0
        this.fontFamilly = 'Pixel'
        this.display = false
    }
    update() {
        this.x -= this.speed
        if (this.x <= 0) this.x = 0
        this.alpha += 0.005
        
        if (this.game.frames % 40 === 0) this.display = !this.display
    }
    draw(context) {
        context.fillRect(this.x, this.y, this.game.width, this.game.height)
        context.textAlign = 'center'

        context.font = 50 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(255,0,0,${this.alpha}`
        context.fillText('GAME OVER!', this.game.width / 2, this.game.height / 2 - 100)

        context.font = 20 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(200,200,200,${this.alpha}`
        if (this.display) context.fillText('PRESS ENTER TO RESTART', this.game.width / 2, this.game.height / 2 - 60)

        context.font = 30 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(255,255,255,${this.alpha}`
        context.fillText(this.game.UI.scoreText, this.game.width / 2, this.game.height / 2 + 50)

        context.font = 30 + 'px ' + this.fontFamilly
        context.fillStyle = `rgba(150,150,150,${this.alpha}`
        context.fillText('HI ' + this.game.UI.highScoreText, this.game.width / 2, this.game.height / 2 + 0)

        if (this.game.score > this.game.highScore) {
            context.font = 20 + 'px ' + this.fontFamilly
            context.fillStyle = `rgba(0,255,0,${this.alpha}`
            context.fillText('NEW RECORD', this.game.width / 2, this.game.height / 2 + 120)
        }

        context.textAlign = 'left'
    }
}