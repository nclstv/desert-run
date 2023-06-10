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
        if (this.game.frames % 10 === 0) this.game.score += Math.floor(this.game.speed) * this.game.scoreRatio
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


        context.textAlign = 'center'
        context.font = 20 + 'px ' + this.fontFamilly

        context.fillStyle = 'rgb(0,205,0,0.8)'

        if (this.game.luckyID === 'X10') context.fillText('SCORE X10', this.game.width / 2, this.game.height / 4)
        if (this.game.luckyID === 'X5') context.fillText('SCORE X5', this.game.width / 2, this.game.height / 4)
        if (this.game.luckyID === 'X2') context.fillText('SCORE X2', this.game.width / 2, this.game.height / 4)


        context.fillStyle = 'rgb(205,0,0,0.8)'

        if (this.game.luckyID === 'SPEEDX2') context.fillText('SPEED X2', this.game.width / 2, this.game.height / 4)
        if (this.game.luckyID === 'BIRDSATTACK') context.fillText('BIRDS ATTACK', this.game.width / 2, this.game.height / 4)

        context.textAlign = 'left'

    }
}