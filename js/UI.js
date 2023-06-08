export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamilly = 'Pixel'
        this.color = 'black'
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamilly
        context.fillStyle = this.color
        context.fillText(this.game.scoreText, 20, 50)
        context.fillStyle = 'green'
        if(this.game.input.keys.includes(' ') && !this.game.menu) context.fillText('X2', 20, 100)
        context.fillStyle = 'rgba(0,0,0,0.5)'
        context.fillText('HI ' + this.game.highScoreText, 250, 50)
        context.fillStyle = 'black'
    }
}