export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamilly = 'Pixel'
        this.color = 'black'
        this.heart = document.getElementById('heart')
        this.scoreText = '000000'
        this.highScoreText = '000000'
    }
    update() {
        if (this.game.frames % 10 === 0) this.game.score += Math.floor(this.game.speed)
        this.scoreText = this.game.score.toString().padStart(6, '0')
        this.highScoreText = this.game.highScore.toString().padStart(6, '0')
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamilly
        context.fillStyle = this.color
        context.fillText(this.scoreText, 20, 50)
        context.fillStyle = 'green'
        context.fillStyle = 'rgba(0,0,0,0.5)'
        context.fillText('HI ' + this.highScoreText, 250, 50)
        context.fillStyle = 'black'

        if (this.game.player.life > 0) context.drawImage(this.heart, 20, 60, 50, 51)
        if (this.game.player.life > 1) context.drawImage(this.heart, 70, 60, 50, 51)
        if (this.game.player.life > 2) context.drawImage(this.heart, 120, 60, 50, 51)

    }
}